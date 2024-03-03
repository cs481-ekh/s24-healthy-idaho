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
    // const [parsedTract, setParsedTract] = useState(null);
    const [tractColor, setTractColor] = useState(null);

    useEffect(() => {
        if (activeTract?.selectedYear >= 2000 && activeTract?.selectedYear <= 2009) {
            setTractData(tracts2000);
            setTractColor('red');
        }
        if (activeTract?.selectedYear >= 2010 && activeTract?.selectedYear <= 2019) {
            setTractData(tracts2010);
            setTractColor('green');
        }
        if (activeTract?.selectedYear >= 2020) {
            setTractData(tracts2020);
            setTractColor('yellow');
        }
        console.log("Tract Data: " + JSON.stringify(activeTract));
    }, [activeTract]);

    return (
        <MapContainer center={[45.394096, -114.734550]} zoom={6} style={{ height: '850px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                tractData && <GeoJSON data={tractData} style={(feature) => ({
                    fillColor: tractColor,
                    type: 'Feature',
                    weight: 2,
                    color: 'black',
                    fillOpacity: 0.5
                
                })}/>
            }
        </MapContainer>
    );
}

export default Map;
