import React, { useState } from 'react';
import "../styles.css";
import './Map.js'

const FilterBar = ({ yearOptions, variableOptions, colorOptions, activeTract, setActiveTract, isComparison}) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedVariable, setSelectedVariable] = useState('');
    const [selectedColor, setSelectedColor] = useState(null);
    // For error messages
    const [yearError, setYearError] = useState(false);
    const [variableError, setVariableError] = useState(false);
    const [colorError, setColorError] = useState(false);

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
            setActiveTract({selectedYear: selectedYear, selectedVariable: selectedVariable, selectedColor: selectedColor});
        }
    };

    return (
        <div className={`filter-bar ${isComparison ? 'comparison' : ''}`}>
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
                        onChange={(e) => setSelectedVariable(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Variable
                        </option>
                        {variableOptions.map((variable, index) => (
                            <option key={index} value={variable}>
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

            {/* Search Button */}
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default FilterBar;
