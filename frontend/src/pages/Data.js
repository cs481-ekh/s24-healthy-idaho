// React module imports
import React from 'react';
import { useState } from 'react';
import Map from './Map';
import axios from 'axios';
import { getVariableDescription } from './Utils.js';

// Local modules
import FilterBar from './FilterBar';
import "../styles.css";
import colorOptions from '../components/ColorOptions.js'
import Footer from "../Footer";

function Data() {
    // Define options for COUNTY and FIPS dropdown menus
    const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
        '2018', '2019', '2020'].map(Number);

    //removed PM-2-5 from variableOptions as it is not in the data for now
    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioeconomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population'];

    const [activeTract, setActiveTract] = useState(null);

    // Function to get variable description
    const getVariableDescription = (variable) => {
        switch (variable) {
            case 'Minority Status and Language':
                return 'Social vulnerability of the census tract population in terms of “Minority Status\n' +
                    'and Language” – 0 indicates lowest vulnerability and 1 signifies highest vulnerability';
            case 'Overall Vulnerability':
                return 'Social vulnerability of the census tract population in terms of “Overall Vulnerability” –\n' +
                    '0 indicates lowest vulnerability and 1 signifies highest vulnerability';
            case 'Housing Type and Transportation':
                return 'Social vulnerability of the census tract population in terms of “Minority\n' +
                    'Status and Language” – 0 indicates lowest vulnerability and 1 signifies highest vulnerability';
            case 'Household Composition and Disability':
                return 'Social vulnerability of the census tract population in terms of\n' +
                    '“Household Composition and Disability” – 0 indicates lowest vulnerability and 1 signifies highest\n' +
                    'vulnerability';
            case 'Socioeconomic Status':
                return 'Social vulnerability of the census tract population in terms of “Socioeconomic Status”\n' +
                    '– 0 indicates lowest vulnerability and 1 signifies highest vulnerability';
            case 'Greenness':
                return 'Percentage of the census tract that is green (mean summer NDVI &gt;= 0.3; irrigated green)';
            case 'Heat Island':
                return 'Urban heat island intensity – higher values indicate higher heat island intensities';
            case 'LST-Max':
                return 'Maximum summer land surface temperature (deg C) in the census tract';
            case 'LST-Mean':
                return 'Average summer land surface temperature (deg C) in the census tract';
            case 'Smoke':
                return 'Total annual smoke load in ug/m3 (sum of all daily smoke levels) for each census tract';
            case 'Population':
                return 'Population of each census tract';
            case 'PM-2-5':
                return 'Total annual PM2.5 load in ug/m3 (sum of all daily PM2.5 levels) for each census tract';
            case 'Heatwave':
                return 'Annual heatwave exposures in person-days. Heatwave is defined as max daily temperature\n' +
                    'exceeding 90 degF for at least 3 consecutive days. Number of heatwave days is multiplied by the population\n' +
                    'exposed and summed over the year to calculate exposure.';
            case 'Density_Population':
                return 'Density of population in each census tract in persons/km2 (population divided by area\n' +
                    'of census tract)';
            default:
                return '';
        }
    };

    return (
        <div>
            <div className="data-container">
                <div className="filter-bar-container">
                    <FilterBar 
                        yearOptions={yearOptions} 
                        variableOptions={variableOptions} 
                        colorOptions={colorOptions}
                        activeTract={activeTract} 
                        setActiveTract={setActiveTract}
                        isComparison={false} // Indicates that it's not being used in comparison context
                    />
                </div>
                <div className="map-container">
                    <Map activeTract={activeTract}/>
                </div>
            </div>
            {/*<Chart />*/}
            <Footer />
        </div>
    );
}

export default Data;

