// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

// Local modules
import "../styles.css"
import './Data.js';
import ColorIt from '../components/ColorIt';

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

function Legend({ selectedColor, colorData, selectedVariable }) {
const map = useMap();

useEffect(() => {
    let legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        let div = L.DomUtil.create('div', 'info legend');
        let labels = [];
        let min = Math.min.apply(null, colorData.map((item) => item.value));
        let max = Math.max.apply(null, colorData.map((item) => item.value));
        let range = max - min;
        let interval = range / selectedColor.length;

        //iterate through each color and draw box in legend
        for (let i = 0; i < selectedColor.length; i++) {
            let rangeStart = min + (i * interval);
            let rangeEnd = rangeStart + interval;

            labels.push(
                '<i class="legend-color-box" style="background:' + selectedColor[i] + ';"></i> ' +
                rangeStart.toFixed(2) + ' - ' + rangeEnd.toFixed(2)
                );
            }
            
        labels.push('<i class = "legend-color-box" style="background: black;"></i> No Data')
            
        div.innerHTML = 
                    `<div>${labels.join('<br>')}</div>`;
        
        return div;
    };

    legend.addTo(map);

    // Cleanup
    return () => {
        legend.remove();
    };
}, [map, selectedColor, selectedVariable]);

return null;
}

function onEachFeature(feature, layer, colorData, variableName) {
if (feature.properties && colorData) {
    let fipsObject = colorData.find((item) => item.id === parseInt(feature.properties.FIPS));

    const handleMouseOver = (event) => {
        const layer = event.target;
        layer.setStyle({fillColor: 'yellow', weight: 7 });   
    };
    
    const handleMouseOut = (event) => {
        const layer = event.target;
        const originalColor = fipsObject.color != null ? fipsObject.color : 'white';
        layer.setStyle({ fillColor : originalColor, weight: 1});
    };


    if(fipsObject && fipsObject.color != null) {
        layer.setStyle({fillColor: fipsObject.color, weight: 1});

        layer.bindPopup(
            "<div style='text-align: center;'><b>Tract Info</b></div>" +
            createPopupInfo("FIPS", feature.properties.FIPS) +
            createPopupInfo(variableName, fipsObject.value ? (Math.round((parseFloat(fipsObject.value) + Number.EPSILON) * 100) / 100) : "No Value" ) +
            createPopupInfo("County", feature.properties.COUNTY) + 
            (feature.properties.AREA_SQMI ? createPopupInfo("Area (sq. mi)", Math.round((feature.properties.AREA_SQMI + Number.EPSILON) * 100) / 100) : "") +
            (feature.properties.LOCATION ? createPopupInfo("Location", feature.properties.LOCATION) : "")
        );

        layer.on ({
            mouseover: handleMouseOver,
            mouseout: handleMouseOut,
        });
        
    }
    else {
        //draw popup for tracts that don't have data
        layer.setStyle({color: 'black', fillColor: 'black', weight: 1});
        layer.bindPopup(
            "<div style='text-align: center;'><b>Tract Info</b></div>" +
            createPopupInfo("FIPS", feature.properties.FIPS) +
            "No data available for this tract in the database.");
    }
}
}

function Map({activeTract, height= '85vh', width = '100%'}) {
const [tractData, setTractData] = useState(null);
const [colorData, setColorData] = useState(null);
const [isColorDataLoaded, setIsColorDataLoaded] = useState(false);
const opacity = activeTract?.opacity ?? 1;
const geoJsonLayer = useRef(null);

// useEffect(() => {
//     if (geoJsonLayer.current) {
//         geoJsonLayer.current.setStyle({
//             fillOpacity: opacity
//         });
//     }
// }, [opacity]);

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
    let old = activeTract?.selectedYear;
    setTractData(newTractData);
    const baseApiUrl=`${process.env.REACT_APP_API_ROOT ?? 'http://localhost:8001/s24-healthy-idaho/api'}`

    if (activeTract?.selectedYear != null) {
        axios.get(baseApiUrl+'/query/?year=' + activeTract?.selectedYear + "&attr=" + activeTract?.selectedVariable.replace(/[\s-]/g, ''))
        .then(response => {
            let data = response.data.data;

            let max = Math.max.apply(null, data.map((item) => item.value));
            let min = Math.min.apply(null, data.map((item) => item.value));
            if( activeTract?.selectedDataMode && max != min) {
                // using percentiles
                let i = 0, j = 0;
                let n;

                // get the total number of data points
                n = Object.keys(response.data.data).length;

                // sort them based on value
                data.sort(function(a, b) {
                return parseFloat(a.value) - parseFloat(b.value);
                });

                let aNinth = Math.round(n / 9);
                data = data.map((item) => {
                if( i++ >= aNinth ) {
                    i = 0; // reset i counter
                    j++;   // increment the color for every n/9
                }

                item.color = activeTract?.selectedColor[j];
                return item;
                });
            }
            else {
                data = data.map((item) => {item.color = ColorIt.colorItNDiv(item.value, min, max, 9, activeTract?.selectedColor); return item;})
            }
            setColorData(data);
            setIsColorDataLoaded(true);
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
        });
    }
}, [activeTract]);


    
return (
    <MapContainer center={[45.394096, -114.734550]} zoom={6} style={{height, width}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {isColorDataLoaded && (
            <GeoJSON 
                ref={geoJsonLayer}
                key={JSON.stringify(tractData) + JSON.stringify(colorData)}
                style={(feature) => {
                    let fipsObject = colorData.find((item) => item.id === parseInt(feature.properties.FIPS));
                    return {
                        color: "black",
                        fillColor: fipsObject ? fipsObject.color : 'defaultColor',
                        fillOpacity: opacity
                    }
                }}
                data={tractData}
                onEachFeature={onEachFeature ? (feature, layer) => 
                    onEachFeature(feature, layer, colorData, activeTract?.selectedVariable, activeTract?.selectedColor, opacity) : null}
            />
        )}
        {isColorDataLoaded && (
            <Legend 
                selectedColor={activeTract?.selectedColor} 
                colorData={colorData}
                selectedVariable={activeTract?.selectedVariable}
            />
        )}
    </MapContainer>
);
}
export default Map;
