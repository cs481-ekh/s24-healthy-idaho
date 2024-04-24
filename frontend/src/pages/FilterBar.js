import React, { useState } from 'react';
import "../styles.css";
import './Map.js'
import { getVariableDescription } from './Utils.js';
import axios from 'axios';
const FilterBar = ({ yearOptions, variableOptions, colorOptions, activeTract, setActiveTract, isComparison, dataMode}) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedVariable, setSelectedVariable] = useState('');
    const [selectedColor, setSelectedColor] = useState(null);
    const [opacity, setOpacity] = useState(1); // Initial opacity value
    // For error messages
    const [yearError, setYearError] = useState(false);
    const [variableError, setVariableError] = useState(false);
    const [colorError, setColorError] = useState(false);
    // For description of selected variable
    const [variableDescription, setVariableDescription] = useState('');
    // For Displaying Data
    const [selectedDataMode, setSelectedDataMode] = useState(true);

    const handleOpacityChange = (e) => {
        setOpacity(parseFloat(e.target.value));
        // Update active tract with new opacity immediately
        setActiveTract({ ...activeTract, opacity: parseFloat(e.target.value) });
    };

    const handleSearch = () => {
        // For error messages
        setYearError(false);
        setVariableError(false);
        setColorError(false);

        // Check if all dropdowns are selected
        if (!selectedYear) {
            setYearError(true);
        }
        if (!selectedVariable) {
            setVariableError(true);
        }
        if (!selectedColor) {
            setColorError(true);
        }

        // Proceed with search only if all dropdowns are selected
        if (selectedYear && selectedVariable && selectedColor) {
            // set active tract with selected year, variable, and color options to pass to Map component
            // setActiveTract({selectedYear: selectedYear, selectedVariable: selectedVariable, selectedColor: selectedColor, opacity: opacity});
            setActiveTract({ selectedYear, selectedVariable, selectedColor, opacity, selectedDataMode });
        }       
    };

    const usePercentiles = () => {
      // Toggle whether Data Display Mode, whether percentiles or abs.
      setSelectedDataMode(true);
      setActiveTract({ ...activeTract, selectedDataMode: true });
    }

    const useAbsoluteValues = () => {
      setSelectedDataMode(false);
      setActiveTract({ ...activeTract, selectedDataMode: false });
    }

    const handleVariableChange = (selectedVariable) => {
        setSelectedVariable(selectedVariable);
    };

    function getDescr() {
      return <p id="getme">{selectedVariable}: {getVariableDescription(selectedVariable)}</p>
    }

    const handleDownload = () => {
        const baseApiUrl=`${process.env.REACT_APP_API_ROOT ?? 'http://localhost:8001/s24-healthy-idaho/api'}`
        console.log('Download clicked');

         // Check if all dropdowns are selected
         if (!selectedYear) {
            setYearError(true);
        }
        if (!selectedVariable) {
            setVariableError(true);
        }
        if (!selectedColor) {
            setColorError(true);
        }

        // Proceed with search only if all dropdowns are selected
        if (selectedYear && selectedVariable && selectedColor) {
            axios.get(baseApiUrl+'/query/?year=' + selectedYear + "&attr=" + selectedVariable.replace(/[\s-]/g, ''))
            .then(response => {
                let data = response.data.data;
                let csvContent = "data:text/csv;charset=utf-8,";

                // Add header row
                csvContent += "FIPS, " + selectedVariable + "\n";
                // Add data rows
                data.forEach((item) => {
                    csvContent += item.id + ", " + item.value + "\n";
                });

                // Create download link
                const encodedUri = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", "hh_subset_" + selectedYear + "_" + selectedVariable+ ".csv");
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
            });
        }
    };

    return (
        <div className={`filter-bar ${isComparison ? 'comparison' : ''}`}>
            <div>
            <div className={"filter-group"}>
                {/* Year Dropdown */}
                <label className="filter-label">Year</label>
                <div className="dropdown">
                    <select
                        id="year"
                        defaultValue={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Year
                        </option>
                        {yearOptions.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    {yearError && <span className="error-message">Please select a year</span>}
                </div>
            </div>

            <div className="filter-group">
                {/* Variable Dropdown */}
                <label className="filter-label">Variable</label>
                <div className="dropdown">
                    <select
                        id="variable"
                        value={selectedVariable}
                        onChange={(e) => handleVariableChange(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Variable
                        </option>
                        {variableOptions.map((variable, index) => (
                            <option key={index} value={variable} title={getVariableDescription(variable)}>
                                {variable}
                            </option>
                        ))}
                    </select>
                    {variableError && <span className="error-message">Please select a variable</span>}
                </div>
            </div>


            <div className="filter-group">
                {/* Color Dropdown */}
                <label className="filter-label">Color</label>
                <div className="dropdown">
                    <select
                        id="color"
                        // value={selectedColor.length ? JSON.stringify(selectedColor) : ""}
                        value={selectedColor !== null ? JSON.stringify(selectedColor) : ""}
                        onChange={(e) => setSelectedColor(JSON.parse(e.target.value))}
                    >
                        <option value="" disabled>
                            Select Color
                        </option>
                        {
                            // Object.keys(colorOptions).map((color, index) => (
                            colorOptions && Object.keys(colorOptions).map((color, index) => (
                                <option key={index} value={JSON.stringify(colorOptions[color])}>
                                    {color}
                                </option>
                            ))
                        }
                    </select>
                    {colorError && <span className="error-message">Please select a color</span>}
                </div>
            </div>

            </div>
            
            <div className="filter-group">
                {/* Opacity Slider */}
                <label className="filter-label">Opacity</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.20"
                    value={opacity}
                    onChange={handleOpacityChange}
                />
            </div>

            <div>
              {/* Percentile vs Abs. Options */}
              <label className="filter-label">Data Display Mode</label>
                <div className="button-options">
                  <button style={{margin: '5px'}} onClick={usePercentiles}>Percentile</button>
                  <button style={{margin: '5px'}} onClick={useAbsoluteValues}>Abs. Val.</button>
                </div>
            </div>

            {/* Search Button */}
            <button onClick={handleSearch}>Search</button>
            <div className="download-section">
                {/* Download Button */}
                <button onClick={handleDownload}>Download Data Subset</button>
            </div>
            <div>
              {getDescr()}
            </div>
        </div>
    );
}

export default FilterBar;
