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

    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioeconomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population', 'PM-2-5', 'Heatwave', 'Density Population'];

    const [activeTract, setActiveTract] = useState(null);

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
                        dataMode={true}
                    />
                </div>
                <div className="map-container" >
                    <Map activeTract={activeTract}/>
                </div>
            </div>
        </div>
    );
}

export default Data;

