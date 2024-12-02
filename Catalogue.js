import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Catalogue({ culturalAssets, setSelectedAsset }) {
    const [sortOption, setSortOption] = useState('title-asc'); // Default sorting option

    // Helper function to get the country, if it exists
    const getCountry = (location) => {
        if (location && location.country) {
            return location.country;
        }
        return 'Unknown Country'; // Return a default value if country is not available
    };

    // Sorting function based on selected sort option
    const sortAssets = (assets) => {
        switch (sortOption) {
            case 'title-asc':
                return assets.sort((a, b) => a.title.localeCompare(b.title));
            case 'title-desc':
                return assets.sort((a, b) => b.title.localeCompare(a.title));
            case 'artist-asc':
                return assets.sort((a, b) => a.artist.localeCompare(b.artist));
            case 'artist-desc':
                return assets.sort((a, b) => b.artist.localeCompare(a.artist));
            case 'date-asc':
                return assets.sort((a, b) => new Date(a.date) - new Date(b.date));
            case 'date-desc':
                return assets.sort((a, b) => new Date(b.date) - new Date(a.date));
            case 'country-asc':
                return assets.sort((a, b) => getCountry(a.location).localeCompare(getCountry(b.location)));
            case 'country-desc':
                return assets.sort((a, b) => getCountry(b.location).localeCompare(getCountry(a.location)));
            default:
                return assets;
        }
    };

    const sortedAssets = sortAssets(culturalAssets);

    return (
        <div className="catalogue-page">
            <h2>Catalogue of Artifacts</h2>

            {/* Sort Options Section */}
            <div className="sort-options">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                    id="sort-select"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="title-asc">Title A-Z</option>
                    <option value="title-desc">Title Z-A</option>
                    <option value="artist-asc">Artist A-Z</option>
                    <option value="artist-desc">Artist Z-A</option>
                    <option value="date-asc">Earliest Date</option>
                    <option value="date-desc">Latest Date</option>
                    <option value="country-asc">Country A-Z</option>
                    <option value="country-desc">Country Z-A</option>
                </select>
            </div>

            {/* Display sorted assets */}
            <div className="catalogue-list">
                {sortedAssets.map((asset) => (
                    <div key={asset.id} className="catalogue-item">
                        <h3>{asset.title}</h3>
                        <p>{asset.artist}</p>
                        <p>{asset.date}</p>
                        <p>Country of Origin: {asset.country}</p> {/* Display country here */}
                        {/* Pass the artifact ID to the Map page */}
                        <Link
                            to="/map"
                            className="view-details"
                            onClick={() => setSelectedAsset(asset)}  // Set selected asset
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalogue;
