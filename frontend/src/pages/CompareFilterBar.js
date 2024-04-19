// CompareFilterBar.js
import React, { useState } from 'react';
import "../styles.css";
import { getVariableDescription } from './Utils.js';

const CompareFilterBar = ({ yearOptions, variableOptions, colorOptions, mapIndex, handleSearch, setSelectedYear, setSelectedVariable, setSelectedColor, isComparison }) => {
    const [selectedYear, setSelectedYearLocal] = useState('');
    const [selectedVariable, setSelectedVariableLocal] = useState('');
    const [selectedColor, setSelectedColorLocal] = useState(null);

    const handleYearChange = (value) => {
        setSelectedYearLocal(value);
        setSelectedYear(value);
    };

    const handleVariableChange = (value) => {
        setSelectedVariableLocal(value);
        setSelectedVariable(value);
    };

    const handleColorChange = (value) => {
        setSelectedColorLocal(value);
        setSelectedColor(value);
    };

    return (
        <div className={`filter-bar ${isComparison ? 'comparison' : ''}`}>
            <div className={"filter-group"}>
                {/* Year Dropdown */}
                <label className="filter-label">Year</label>
                <div className="dropdown">
                    <select
                        id={`year-${mapIndex}`}
                        defaultValue={selectedYear}
                        onChange={(e) => handleYearChange(e.target.value)}
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
                </div>
            </div>

            <div className="filter-group">
                {/* Variable Dropdown */}
                <label className="filter-label">Variable</label>
                <div className="dropdown">
                    <select
                        id={`variable-${mapIndex}`}
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
                </div>
            </div>

            <div className="filter-group">
                {/* Color Dropdown */}
                <label className="filter-label">Color</label>
                <div className="dropdown">
                    <select
                        id={`color-${mapIndex}`}
                        value={selectedColor !== null ? JSON.stringify(selectedColor) : ""}
                        onChange={(e) => handleColorChange(JSON.parse(e.target.value))}
                    >
                        <option value="" disabled>
                            Select Color
                        </option>
                        {colorOptions && Object.keys(colorOptions).map((color, index) => (
                            <option key={index} value={JSON.stringify(colorOptions[color])}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CompareFilterBar;