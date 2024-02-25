import React, { useState } from 'react';
import "../styles.css";

const FilterBar = ({ countyOptions, fipsOptions }) => {
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedFips, setSelectedFips] = useState('');
    const [selectAllAttributes, setSelectAllAttributes] = useState(false);
    const [attributes, setAttributes] = useState({
        minorityStatusAndLanguage: false,
        overallVulnerability: false,
        housingTypeAndTransportation: false,
        householdCompositionAndDisability: false,
        socioencomicStatus: false,
        greenness: false,
        heatIsland: false,
        lstMax: false,
        lstMean: false,
        smoke: false,
        population: false,
        pm25: false,
    });

    const handleAttributeChange = (attribute) => {
        setAttributes(prevState => ({
            ...prevState,
            [attribute]: !prevState[attribute]
        }));
    };

    const handleSelectAll = () => {
        if (selectAllAttributes) {
            // deselect if all currently selected
            const allAttributesFalse = Object.keys(attributes).reduce((acc, key) => {
                acc[key] = false;
                return acc;
            }, {});
            setAttributes(allAttributesFalse);
        } else {
            // select all attributes
            const allAttributesTrue = Object.keys(attributes).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {});
            setAttributes(allAttributesTrue);
        }
        setSelectAllAttributes(!selectAllAttributes); // toggle
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log("Search button clicked");
    };

    return (
        <div className="filter-bar">
            {/* County Dropdown */}
            <div className="dropdown">
                <select id="county" value={selectedCounty} onChange={(e) => setSelectedCounty(e.target.value)}>
                    <option value="" disabled>Select County</option>
                    {countyOptions.map((county, index) => (
                        <option key={index} value={county}>{county}</option>
                    ))}
                </select>
            </div>

            {/* FIPS Dropdown */}
            <div className="dropdown">
                <select id="fips" value={selectedFips} onChange={(e) => setSelectedFips(e.target.value)}>
                    <option value="" disabled>Select FIPS</option>
                    {fipsOptions.map((fips, index) => (
                        <option key={index} value={fips}>{fips}</option>
                    ))}
                </select>
            </div>

            {/* Filters */}
            <div className="filter-box">
                <label>
                    <input
                        type="checkbox"
                        checked={selectAllAttributes}
                        onChange={handleSelectAll}
                    />
                    Select All
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.minorityStatusAndLanguage}
                        onChange={() => handleAttributeChange('minorityStatusAndLanguage')}
                    />
                    Minority Status and Language:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.overallVulnerability}
                        onChange={() => handleAttributeChange('overallVulnerability')}
                    />
                    Overall Vulnerability:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.housingTypeAndTransportation}
                        onChange={() => handleAttributeChange('housingTypeAndTransportation')}
                    />
                    Housing Type and Transportation:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.householdCompositionAndDisability}
                        onChange={() => handleAttributeChange('householdCompositionAndDisability')}
                    />
                    Household Composition and Disability:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.socioencomicStatus}
                        onChange={() => handleAttributeChange('socioencomicStatus')}
                    />
                    Socioencomic Status:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.greenness}
                        onChange={() => handleAttributeChange('greenness')}
                    />
                    Greenness:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.heatIsland}
                        onChange={() => handleAttributeChange('heatIsland')}
                    />
                    Heat Island:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.lstMax}
                        onChange={() => handleAttributeChange('lstMax')}
                    />
                    LST-Max:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.lstMean}
                        onChange={() => handleAttributeChange('lstMean')}
                    />
                    LST-Mean:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.smoke}
                        onChange={() => handleAttributeChange('smoke')}
                    />
                    Smoke:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.population}
                        onChange={() => handleAttributeChange('population')}
                    />
                    Population:
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={attributes.pm25}
                        onChange={() => handleAttributeChange('pm25')}
                    />
                    PM-2-5:
                </label>
                {/* Search Button */}
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default FilterBar;
