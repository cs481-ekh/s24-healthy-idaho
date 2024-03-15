// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Control } from 'react-leaflet';
import axios from 'axios';

// Local modules
import "../styles.css"
import './Data.js';
import ColorIt from '../components/ColorIt.js';

// Import GeoJSON data from local files
import tracts2020 from '../tracts/tract2020.json';
import tracts2010 from '../tracts/tract2010.json';
import tracts2000 from '../tracts/tract2000.json';

// function to sanitize HTML elements
function sanitizeHTML(text) {
    let div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function createPopupInfo(name, value) {
    return `<div class="popup-info"><b>${name}</b> <span>${sanitizeHTML(value)}</span></div>`;
}

function onEachFeature(feature, layer, colorData, variableName) {
    if (feature.properties && colorData) {
        let fipsObject = colorData.find((item) => item.id === parseInt(feature.properties.FIPS));
        
        const handleMouseOver = (event) => {
            const layer = event.target;
            layer.setStyle({fillColor: 'yellow' });   
        };
        
        const handleMouseOut = (event) => {
            const layer = event.target;
            const originalColor = fipsObject.color != null ? fipsObject.color : 'white';
            layer.setStyle({ fillColor : originalColor });
        };

        if(fipsObject && fipsObject.color != null) {
            layer.setStyle({fillColor: fipsObject.color, weight: 1, fillOpacity: 1});

            layer.bindPopup(
                "<div style='text-align: center;'><b>Tract Info</b></div>" +
                createPopupInfo("FIPS", feature.properties.FIPS) +
                createPopupInfo(variableName, Math.round((parseFloat(fipsObject.value) + Number.EPSILON) * 100) / 100) +
                createPopupInfo("County", feature.properties.COUNTY) +
                (feature.properties.AREA_SQMI ? createPopupInfo("Area (sq. mi)", Math.round((feature.properties.AREA_SQMI + Number.EPSILON) * 100) / 100) : "") +
                (feature.properties.LOCATION ? createPopupInfo("Location", feature.properties.LOCATION) : "")
            );

            layer.on ({
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            });
        }
        else {
            //draw popup for tracts that don't have data
            layer.setStyle({color: 'black', fillColor: 'black', weight: 1, fillOpacity: 0.75});
            layer.bindPopup(
                "<div style='text-align: center;'><b>Tract Info</b></div>" +
                createPopupInfo("FIPS", feature.properties.FIPS) +
                "No data");
        }

        
    }
}

function Map({activeTract}) {
    const [tractData, setTractData] = useState(null);
    const [colorData, setColorData] = useState(null);
    const [isColorDataLoaded, setIsColorDataLoaded] = useState(false);

    useEffect(() => {
        let newTractData = null;
        // Set tract data and color based on selected year
        if (activeTract?.selectedYear >= 2000 && activeTract?.selectedYear <= 2009) {
            newTractData = tracts2000;
        }
        if (activeTract?.selectedYear >= 2010 && activeTract?.selectedYear <= 2019) {
            newTractData = tracts2010;
        }
        if (activeTract?.selectedYear >= 2020) {
            newTractData = tracts2020;
        }

        setTractData(newTractData);
        const baseApiUrl=`${process.env.REACT_APP_API_ROOT ?? 'http://localhost:8001/s24-healthy-idaho'}`

        if (activeTract?.selectedYear != null) {
            console.log("fetching:"+baseApiUrl+'/query/?year=' + activeTract?.selectedYear + "&attr=" + activeTract?.selectedVariable.replace(/[\s-]/g, ''))
            axios.get(baseApiUrl+'/query/?year=' + activeTract?.selectedYear + "&attr=" + activeTract?.selectedVariable.replace(/[\s-]/g, ''))
            .then(response => {
                let data = response.data.data;

                let max = Math.max.apply(null, data.map((item) => item.value));
                let min = Math.min.apply(null, data.map((item) => item.value));

                data = data.map((item) => {item.color = ColorIt.colorItNDiv(item.value, min, max, 9, activeTract?.selectedColor); return item;})
                setColorData(data);
                setIsColorDataLoaded(true);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
            });
        }
        

    }, [activeTract]);
    
    
    return (
        <MapContainer center={[45.394096, -114.734550]} zoom={6} style={{ height: '850px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {isColorDataLoaded && (
                <GeoJSON 
                    key={JSON.stringify(tractData) + JSON.stringify(colorData)}
                    style={{color: 'black', fillColor: 'black', weight: 1, fillOpacity: 0.25}}
                    data={tractData}
                    onEachFeature={onEachFeature ? (feature, layer) => 
                        onEachFeature(feature, layer, colorData, activeTract?.selectedVariable) : null}
                />
            )}
        </MapContainer>
    );
}

export default Map;
