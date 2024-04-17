import React, { useState } from 'react';
import Map from './Map';
import CompareFilterBar from './CompareFilterBar';
import "../styles.css";
import colorOptions from "../components/ColorOptions";
import Footer from "../Footer";

function Compare() {
    const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
        '2018', '2019', '2020'];
    const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
        'Housing Type and Transportation', 'Household Composition and Disability',
        'Socioeconomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
        'Smoke', 'Population', 'PM-2-5', 'Heatwave', 'Density Population'];

    const [activeTractLeft, setActiveTractLeft] = useState(null);
    const [selectedYearLeft, setSelectedYearLeft] = useState('');
    const [selectedVariableLeft, setSelectedVariableLeft] = useState('');
    const [selectedColorLeft, setSelectedColorLeft] = useState(null);

    const [activeTractRight, setActiveTractRight] = useState(null);
    const [selectedYearRight, setSelectedYearRight] = useState('');
    const [selectedVariableRight, setSelectedVariableRight] = useState('');
    const [selectedColorRight, setSelectedColorRight] = useState(null);

    const [opacity, setOpacity] = useState(0.25);

    const handleSearch = (mapIndex) => {
        let selectedYear, selectedVariable, selectedColor;

        if (mapIndex === 1) {
            selectedYear = selectedYearLeft;
            selectedVariable = selectedVariableLeft;
            selectedColor = selectedColorLeft;
        } else if (mapIndex === 2) {
            selectedYear = selectedYearRight;
            selectedVariable = selectedVariableRight;
            selectedColor = selectedColorRight;
        } else {
            selectedYear = null;
            selectedVariable = null;
            selectedColor = null;
        }

        if (selectedYear && selectedVariable && selectedColor) {
            if (mapIndex === 1) {
                setActiveTractLeft({ selectedYear, selectedVariable, selectedColor, opacity });
            }
            if (mapIndex === 2) {
                setActiveTractRight({ selectedYear, selectedVariable, selectedColor, opacity });
            }
        }
    };

    const handleOpacityChange = (mapIndex, value) => {
        let activeTract, setActiveTract;

        if (mapIndex === 1) {
            activeTract = activeTractLeft;
            setActiveTract = setActiveTractLeft;
        } else if (mapIndex === 2) {
            activeTract = activeTractRight;
            setActiveTract = setActiveTractRight;
        } else {
            activeTract = null;
            setActiveTract = null;
        }

        setOpacity(parseFloat(value));
        // Update active tract with new opacity
        if(activeTract && setActiveTract) {
            setActiveTract({ ...activeTract, opacity: parseFloat(value) });
        }
    };

    return (
        <div>
            <div className="compare-container">
                <div className="left-section">
                    <CompareFilterBar
                        yearOptions={yearOptions}
                        variableOptions={variableOptions}
                        colorOptions={colorOptions}
                        mapIndex={1}
                        handleSearch={handleSearch}
                        handleOpacityChange={handleOpacityChange}
                        setSelectedYear={setSelectedYearLeft}
                        setSelectedVariable={setSelectedVariableLeft}
                        setSelectedColor={setSelectedColorLeft}
                        isComparison={true}
                    />
                    <div className="compare-map-container">
                        <Map activeTract={activeTractLeft}/>
                    </div>
                </div>
                <div className="right-section">
                    <CompareFilterBar
                        yearOptions={yearOptions}
                        variableOptions={variableOptions}
                        colorOptions={colorOptions}
                        mapIndex={2}
                        handleSearch={handleSearch}
                        handleOpacityChange={handleOpacityChange}
                        setSelectedYear={setSelectedYearRight}
                        setSelectedVariable={setSelectedVariableRight}
                        setSelectedColor={setSelectedColorRight}
                        isComparison={true}
                    />
                    <div className="compare-map-container">
                        <Map activeTract={activeTractRight}/>
                    </div>
                </div>
            </div>
            <div className="compare-controls">
                {/* Search Button */}
                <button onClick={() => handleSearch(1)}>Search</button>
                {/* Opacity Slider */}
                <div className="opacity-compare">
                    <label className="filter-label">Opacity</label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={activeTractLeft?.opacity ?? activeTractRight?.opacity}
                        onChange={(e) => handleOpacityChange(1, e.target.value)}
                    />
                </div>
            </div>
    <Footer />
    </div>
    );
}

export default Compare;


// import React, {useState} from 'react';
// import Map from './Map';
// import FilterBar from './FilterBar';
// import "../styles.css";
// import colorOptions from "../components/ColorOptions";
// import Footer from "../Footer";
//
// function Data() {
//     // Define options for COUNTY and FIPS dropdown menus
//     const yearOptions = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
//         '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017',
//         '2018', '2019', '2020'];
//     const variableOptions = ['Minority Status and Language', 'Overall Vulnerability',
//         'Housing Type and Transportation', 'Household Composition and Disability',
//         'Socioeconomic Status', 'Greenness', 'Heat Island', 'LST-Max', 'LST-Mean',
//         'Smoke', 'Population', 'PM-2-5', 'Heatwave', 'Density Population'];
//
//     const [activeTractLeft, setActiveTractLeft] = useState(null);
//     const [activeTractRight, setActiveTractRight] = useState(null);
//
//     return (
//         <div>
//             <div className="compare-container">
//                 <div className="left-section">
//                     <FilterBar
//                         yearOptions={yearOptions}
//                         variableOptions={variableOptions}
//                         colorOptions={colorOptions}
//                         activeTract={activeTractLeft}
//                         setActiveTract={setActiveTractLeft}
//                         isComparison={true} // Indicates that it's being used in comparison context
//                     />
//                     <div className="map-container">
//                         <Map activeTract={activeTractLeft}/>
//                     </div>
//                 </div>
//                 <div className="right-section">
//                     <FilterBar
//                         yearOptions={yearOptions}
//                         variableOptions={variableOptions}
//                         colorOptions={colorOptions}
//                         activeTract={activeTractLeft}
//                         setActiveTract={setActiveTractRight}
//                         isComparison={true} // Indicates that it's being used in comparison context
//                     />
//                     <div className="map-container">
//                         <Map activeTract={activeTractRight}/>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }
//
// export default Data;
//
