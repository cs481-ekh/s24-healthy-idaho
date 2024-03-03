// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

// Local modules
import "../styles.css"
import './Data.js';

// Import GeoJSON data from local files
import tracts2020 from '../tracts/tract2020.json';
import tracts2010 from '../tracts/tract2010.json';
import tracts2000 from '../tracts/tract2000.json';

function Map({activeTract}) {
    const [tractData, setTractData] = useState(null);
    const [tractColor, setTractColor] = useState(null);

    useEffect(() => {
        let newTractData = null;
        let newTractColor = null;
        if (activeTract?.selectedYear >= 2000 && activeTract?.selectedYear <= 2009) {
            newTractData = tracts2000;
            newTractColor = 'red';
        }
        if (activeTract?.selectedYear >= 2010 && activeTract?.selectedYear <= 2019) {
            newTractData = tracts2010;
            newTractColor = 'green';
        }
        if (activeTract?.selectedYear >= 2020) {
            newTractData = tracts2020;
            newTractColor = 'yellow';
        }

        setTractData(newTractData);
        setTractColor(newTractColor);
        console.log("Tract Data: " + JSON.stringify(activeTract));
    }, [activeTract]);

    return (
        <MapContainer center={[45.394096, -114.734550]} zoom={6} style={{ height: '850px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <GeoJSON 
                key={JSON.stringify(tractData)}
                data={tractData}
                style={() => ({
                    color: 'black',
                    weight: 1,
                    fillColor: tractColor,
                    fillOpacity: 0.5
                })}
            />

        </MapContainer>
    );
}

export default Map;
