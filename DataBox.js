import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function DataBox({ filters, setFilters, culturalAssets }) {
    const [filteredResults, setFilteredResults] = useState([]); // State to store filtered results
    const [error, setError] = useState(null); // State for storing error message

    const handleSearchChange = (e) => {
        const searchQuery = e.target.value;
        setFilters({
            ...filters,
            search: searchQuery,
        });

        // Clear error when the user types in the input
        setError(null);

        // Filter cultural assets based on the search query
        const filtered = culturalAssets.filter((asset) =>
            asset.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredResults(filtered);
    };

    const handleSearchSubmit = () => {
        if (filters.search.trim() === '') {
            setError('Please enter a valid search term.');
        } else {
            setError(null); // Reset the error if a valid search term is entered
            const filtered = culturalAssets.filter((asset) =>
                asset.title.toLowerCase().includes(filters.search.toLowerCase())
            );
            setFilteredResults(filtered);
        }
    };

    return (
        <div className="data-box">
            <label>Search for Artifacts:</label>
            <input
                type="text"
                placeholder="Search for an artifact"
                value={filters.search}
                onChange={handleSearchChange}
            />

            {/* Button to submit the search */}
            <button onClick={handleSearchSubmit}>Search</button>

            {/* Show error message if the search is empty or invalid */}
            {error && <p className="error-message">{error}</p>}

            {/* Filter Link to FilterPage */}
            <div className="filter-bar">
                <Link to="/filter" className="filter-button">Filter</Link> {/* Link instead of button */}

                {/* Optionally, you can still show the dropdown if needed */}
                {filteredResults.length > 0 && (
                    <div className="dropdown-menu">
                        {filteredResults.map((asset) => (
                            <div
                                key={asset.id}
                                className="dropdown-item"
                                onClick={() => {
                                    setFilters({
                                        ...filters,
                                        search: asset.title,
                                    });
                                    setFilteredResults([]);
                                }}
                            >
                                {asset.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DataBox;
