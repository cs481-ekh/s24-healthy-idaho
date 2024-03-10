// React module imports
import React from 'react';
import { useState } from 'react';
import Map from './Map';
import axios from 'axios';
import JSPopup from "reactjs-popup";
import {Link} from "react-router-dom";

// Local modules
import FilterBar from './FilterBar';
import "../styles.css";
import colorOptions from '../components/ColorOptions.js'

function Data() {
    // Define options for COUNTY and FIPS dropdown menus
    const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
        '2018', '2019', '2020'].map(Number);

    //removed PM-2-5 from variableOptions as it is not in the data for now
    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioencomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population'];

    const [activeTract, setActiveTract] = useState(null);

    return (
        <div>
            <div className="data-container">
                <JSPopup trigger={<Link className="important-notice-title">Important Notice</Link>}>
                    <div className="important-notice">
                        For the best search experience be sure to select the Year, Variable, and Color
                        from each menu before searching.
                        <br />
                        The Color menu is giving you the choice for which color the census tracts will
                        be displayed on the map.
                        <br />
                        This accommodates color-blind individuals for inclusivity.
                    </div>
                </JSPopup>
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
        </div>
    );
}

export default Data;

