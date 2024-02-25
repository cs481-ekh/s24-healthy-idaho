import React from 'react';
import Map from './components/Map';
// import Chart from './Chart';
import FilterBar from './components/FilterBar';
import "./styles.css";

function App() {
    // Define options for COUNTY and FIPS dropdown menus
    const countyOptions = ['CountyName1', 'CountyName2', 'CountyName3']; // Example options
    const fipsOptions = ['16xxx', '16xxx', '16xxx']; // Example options

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

