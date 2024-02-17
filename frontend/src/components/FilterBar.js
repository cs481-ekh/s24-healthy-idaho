import React, { useState } from 'react';
import "../styles.css";

const FilterBar = ({ countyOptions, fipsOptions }) => {
    const [selectedCounty, setSelectedCounty] = useState('');
    const [selectedFips, setSelectedFips] = useState('');
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

    return (
        <div className="filter-bar">
            {/* County Dropdown */}
            <div className="dropdown">
                <select value={selectedCounty} onChange={(e) => setSelectedCounty(e.target.value)}>
                    <option value="">Select County</option>
                    {countyOptions.map((county, index) => (
                        <option key={index} value={county}>{county}</option>
                    ))}
                </select>
            </div>

            {/* FIPS Dropdown */}
            <div className="dropdown">
                <select value={selectedFips} onChange={(e) => setSelectedFips(e.target.value)}>
                    <option value="">Select FIPS</option>
                    {fipsOptions.map((fips, index) => (
                        <option key={index} value={fips}>{fips}</option>
                    ))}
                </select>
            </div>

            {/* Filters */}
            <div className="filter-box">
                <label>
                    Minority Status and Language:
                    <input
                        type="checkbox"
                        checked={attributes.minorityStatusAndLanguage}
                        onChange={() => handleAttributeChange('minorityStatusAndLanguage')}
                    />
                </label>
                <label>
                    Overall Vulnerability:
                    <input
                        type="checkbox"
                        checked={attributes.overallVulnerability}
                        onChange={() => handleAttributeChange('overallVulnerability')}
                    />
                </label>
                <label>
                    Housing Type And Transportation:
                    <input
                        type="checkbox"
                        checked={attributes.housingTypeAndTransportation}
                        onChange={() => handleAttributeChange('housingTypeAndTransportation')}
                    />
                </label>
                <label>
                    Household Composition And Disability:
                    <input
                        type="checkbox"
                        checked={attributes.householdCompositionAndDisability}
                        onChange={() => handleAttributeChange('householdCompositionAndDisability')}
                    />
                </label>
                <label>
                    Socioencomic Status:
                    <input
                        type="checkbox"
                        checked={attributes.socioencomicStatus}
                        onChange={() => handleAttributeChange('socioencomicStatus')}
                    />
                </label>
                <label>
                    Greenness:
                    <input
                        type="checkbox"
                        checked={attributes.greenness}
                        onChange={() => handleAttributeChange('greenness')}
                    />
                </label>
                <label>
                    Heat Island:
                    <input
                        type="checkbox"
                        checked={attributes.heatIsland}
                        onChange={() => handleAttributeChange('heatIsland')}
                    />
                </label>
                <label>
                    LST-Max:
                    <input
                        type="checkbox"
                        checked={attributes.lstMax}
                        onChange={() => handleAttributeChange('lstMax')}
                    />
                </label>
                <label>
                    LST-Mean:
                    <input
                        type="checkbox"
                        checked={attributes.lstMean}
                        onChange={() => handleAttributeChange('lstMean')}
                    />
                </label>
                <label>
                    Smoke:
                    <input
                        type="checkbox"
                        checked={attributes.smoke}
                        onChange={() => handleAttributeChange('smoke')}
                    />
                </label>
                <label>
                    Population:
                    <input
                        type="checkbox"
                        checked={attributes.population}
                        onChange={() => handleAttributeChange('population')}
                    />
                </label>
                <label>
                    PM-2-5:
                    <input
                        type="checkbox"
                        checked={attributes.pm25}
                        onChange={() => handleAttributeChange('pm25')}
                    />
                </label>
            </div>
        </div>
    );
}

export default FilterBar;
