import React, { useEffect } from 'react';
import Map from './components/Map';
// import Chart from './Chart';
import FilterBar from './components/FilterBar';
import axios from 'axios';
import "./styles.css";

function App() {
    // Define options for COUNTY and FIPS dropdown menus
    const countyOptions = ['CountyName1', 'CountyName2', 'CountyName3']; // Example options
    const fipsOptions = ['16xxx', '16xxx', '16xxx']; // Example options

    // console log test to see if we can get data from the backend
    useEffect(() => {
        axios.get('http://localhost:8001/healthy_idaho/')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Nav Bar will go up here</h1>

            <div className="app-container">
                <div className="filter-bar-container">
                    <FilterBar countyOptions={countyOptions} fipsOptions={fipsOptions} />
                </div>

                <div className="map-container">
                    <Map />
                </div>
            </div>

            {/*<Chart />*/}
        </div>
    );
}

export default App;

