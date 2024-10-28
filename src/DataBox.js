import React from 'react';
import './DataBox.css';

function DataBox({ filters, setFilters }) {
    // Handle changes to the filter dropdown
    const handleFilterChange = (event) => {
        setFilters({ ...filters, status: event.target.value });
    };

    // Handle changes to the search input
    const handleSearchChange = (event) => {
        setFilters({ ...filters, search: event.target.value });
    };

    return (
        <div className="data-box">
            <label className="filter-label" htmlFor="statusFilter">Filter by Status:</label>
            <select
                id="statusFilter"
                className="filter-select"
                value={filters.status}
                onChange={handleFilterChange}
            >
                <option value="all">All</option>
                <option value="recovered">Recovered</option>
                <option value="missing">Missing</option>
                <option value="looted">Looted</option>
            </select>

            <label className="filter-label" htmlFor="searchInput">Search by Name:</label>
            <input
                id="searchInput"
                type="text"
                className="data-input"
                placeholder="Enter asset name..."
                value={filters.search || ''}
                onChange={handleSearchChange}
            />

            <button className="button" onClick={() => setFilters({ status: 'all', search: '' })}>
                Clear Filters
            </button>
        </div>
    );
}

export default DataBox;
