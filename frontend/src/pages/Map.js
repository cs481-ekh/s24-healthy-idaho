// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';

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
    const [searchData, setSearchData] = useState(null);
    
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

        console.log('Selected year: ', activeTract?.selectedYear);
        
        if (activeTract?.selectedYear != null) {
            axios.get('http://localhost:8001/healthy_idaho/?year=' + activeTract?.selectedYear)
            .then(response => {
                setSearchData(response.data.data);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
            });
        }

        setTractData(newTractData);
        setTractColor(newTractColor);
    }, [activeTract]);
    
    return (
        <MapContainer center={[45.394096, -114.734550]} zoom={6} style={{ height: '850px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <GeoJSON 
                key={JSON.stringify(tractData)}
                data={tractData}
                style={() => ({
                    color: 'white',
                    weight: 1,
                    fillColor: 'blue',
                    fillOpacity: 0.5
                })}
            />

        </MapContainer>
    );
}

export default Map;
