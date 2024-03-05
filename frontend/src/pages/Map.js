// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

// Local modules
import "../styles.css"
import './Data.js';
import colorOptions from '../components/ColorOptions.js';
// import colorItNDiv from '../components/ColorIt.js';

// Import GeoJSON data from local files
import tracts2020 from '../tracts/tract2020.json';
import tracts2010 from '../tracts/tract2010.json';
import tracts2000 from '../tracts/tract2000.json';

function colorItNDiv(x, low, high, div, color) {
    if( low > high ) 
      throw new Error("low >= high")

    let divVal = (high - low) / div;

    return color[Math.floor((x - low) / divVal)];
}

function onEachFeature(feature, layer, colorData) {
    if (feature.properties && colorData) {
        let fipsObject = colorData.find((item) => item.id === parseInt(feature.properties.FIPS));

        if(fipsObject && fipsObject.color != null) {
            layer.setStyle({fillColor: fipsObject.color, weight: 1, fillOpacity: 1});
        }
    }
}

function Map({activeTract}) {
    const [tractData, setTractData] = useState(null);
    const [colorData, setColorData] = useState(null);
    const [isColorDataLoaded, setIsColorDataLoaded] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        console.log(activeTract);
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

        if (activeTract?.selectedYear != null) {
            axios.get('http://localhost:8001/healthy_idaho/query/?year=' + activeTract?.selectedYear + "&attr=" + activeTract?.selectedVariable.replace(/[\s-]/g, ''))
            .then(response => {
                let data = response.data.data;

                let max = Math.max.apply(null, data.map((item) => item.value));
                let min = Math.min.apply(null, data.map((item) => item.value));

                data = data.map((item) => {item.color = colorItNDiv(item.value, min, max, 9, activeTract?.selectedColor); return item;})
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
                    style={{color: 'black', weight: 1, fillOpacity: 0.25}}
                    data={tractData}
                    onEachFeature={(feature, layer) => onEachFeature(feature, layer, colorData)}
                />
            )}
        </MapContainer>
    );
}

export default Map;
