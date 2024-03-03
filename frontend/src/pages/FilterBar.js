import React, { useState } from 'react';
import "../styles.css";
import './Map.js'

const FilterBar = ({ yearOptions, variableOptions, activeTract, setActiveTract, isComparison }) => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedVariable, setSelectedVariable] = useState('');

    const handleSearch = () => {
        // Implement search functionality here
        setActiveTract({selectedYear: selectedYear, selectedVariable: selectedVariable});
    };

    return (
        <div className={`filter-bar ${isComparison ? 'comparison' : ''}`}>
            <div className="filter-group">
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
                </div>
            </div>

            {/* Search Button */}
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default FilterBar;
