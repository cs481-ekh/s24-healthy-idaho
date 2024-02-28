import React from 'react';
import Map from './Map';
// import Chart from './Chart';
import FilterBar from './FilterBar';
import "../styles.css";

function Data() {
    // Define options for COUNTY and FIPS dropdown menus
    const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
        '2018', '2019', '2020'];
    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioencomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population', 'PM-2-5'];

    return (
        <div>
            <div className="app-container">
                <div className="filter-bar-container">
                    <FilterBar yearOptions={yearOptions} variableOptions={variableOptions} />
                </div>

                <div className="map-container">
                    <Map />
                </div>
            </div>

            {/*<Chart />*/}
        </div>
    );
}

export default Data;
