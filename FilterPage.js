import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

function FilterPage({ culturalAssets, setFilters }) {
    const [error, setError] = useState(null); // For error handling in filters

    // Memoize filter values to improve performance
    const countries = useMemo(() => {
        if (culturalAssets && culturalAssets.length > 0) {
            return [...new Set(culturalAssets.map(asset => asset.location?.country || 'Unknown'))];
        }
        return [];
    }, [culturalAssets]);

    const artifactTypes = useMemo(() => {
        if (culturalAssets && culturalAssets.length > 0) {
            return [...new Set(culturalAssets.map(asset => asset.type || 'Unknown'))];
        }
        return [];
    }, [culturalAssets]);

    const artists = useMemo(() => {
        if (culturalAssets && culturalAssets.length > 0) {
            return [...new Set(culturalAssets.map(asset => asset.artist || 'Unknown'))];
        }
        return [];
    }, [culturalAssets]);

    const timePeriods = useMemo(() => {
        if (culturalAssets && culturalAssets.length > 0) {
            return [...new Set(culturalAssets.map(asset => asset.timePeriod || 'Unknown'))];
        }
        return [];
    }, [culturalAssets]);

    // Handle changes in any of the select options
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // If culturalAssets is not available, display a loading message
    if (!culturalAssets || culturalAssets.length === 0) {
        return <div>Loading filters...</div>;
    }

    return (
        <div className="filter-page">
            <h2>Filter Cultural Assets</h2>

            {/* Country filter */}
            <div className="filter-section">
                <label htmlFor="country">Select Country:</label>
                <select id="country" name="country" onChange={handleChange}>
                    <option value="">All Countries</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            {/* Type filter */}
            <div className="filter-section">
                <label htmlFor="artifactType">Select Type of Artifact:</label>
                <select id="artifactType" name="artifactType" onChange={handleChange}>
                    <option value="">All Types</option>
                    {artifactTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
            </div>

            {/* Artist filter */}
            <div className="filter-section">
                <label htmlFor="artist">Select Artist:</label>
                <select id="artist" name="artist" onChange={handleChange}>
                    <option value="">All Artists</option>
                    {artists.map((artist, index) => (
                        <option key={index} value={artist}>{artist}</option>
                    ))}
                </select>
            </div>

            {/* Time Period filter */}
            <div className="filter-section">
                <label htmlFor="timePeriod">Select Time Period:</label>
                <select id="timePeriod" name="timePeriod" onChange={handleChange}>
                    <option value="">All Time Periods</option>
                    {timePeriods.map((period, index) => (
                        <option key={index} value={period}>{period}</option>
                    ))}
                </select>
            </div>

            <button onClick={() => alert('Filters Applied')}>Apply Filters</button>

            <Link to="/map">
                <button className="return-button">Return</button>
            </Link>
        </div>
    );
}

export default FilterPage;
