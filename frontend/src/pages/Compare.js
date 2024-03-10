import React, {useState} from 'react';
import Map from './Map';
// import Chart from './Chart';
import FilterBar from './FilterBar';
import "../styles.css";
import colorOptions from "../components/ColorOptions";

function Data() {
    // Define options for COUNTY and FIPS dropdown menus
    const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
        '2018', '2019', '2020'];
    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioencomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population', 'PM-2-5'];

    const [activeTract, setActiveTract] = useState(null);

    return (
        <div>
            <div className="compare-container">
                <div className="left-section">
                    <FilterBar
                        yearOptions={yearOptions}
                        variableOptions={variableOptions}
                        colorOptions={colorOptions}
                        activeTract={activeTract}
                        setActiveTract={setActiveTract}
                        isComparison={false} // Indicates that it's being used in comparison context
                    />
                    <div className="map-container">
                        <Map />
                    </div>
                </div>
                <div className="right-section">
                    <FilterBar
                        yearOptions={yearOptions}
                        variableOptions={variableOptions}
                        colorOptions={colorOptions}
                        activeTract={activeTract}
                        setActiveTract={setActiveTract}
                        isComparison={false} // Indicates that it's being used in comparison context
                    />
                    <div className="map-container">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;

