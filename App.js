import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Map from './Map';
import DataBox from './DataBox';
import FilterPage from './FilterPage';
import About from './About';
import Catalogue from './Catalogue';
import './App.css';

// API URLs (unchanged)
const gettyApiUrl = "https://data.getty.edu/museum/collection/object/";
const metApiBaseUrl = "https://collectionapi.metmuseum.org/public/collection/v1";
const aicApiBaseUrl = "https://api.artic.edu/api/v1/artworks";

// List of major countries for fallback
const majorCountries = [
    "United States", "Canada", "Mexico", // North America
    "Brazil", "Argentina", "Chile",     // South America
    "United Kingdom", "France", "Germany", "Italy", "Spain", "Netherlands", // Europe
    "China", "Japan", "India", "South Korea", "Australia", // Asia
    "Egypt", "South Africa", "Nigeria", // Africa
    "Australia", "New Zealand", // Oceania
];

// Function to assign country based on conditions
const getCountryOfOrigin = (artifact) => {
    // 1. Check if the artifact directly has a country
    if (artifact.country) {
        return artifact.country;
    }

    // 2. Assign based on artist's country of origin (if available)
    if (artifact.artist) {
        const artistCountry = getArtistCountry(artifact.artist);
        if (artistCountry) {
            return artistCountry;
        }
    }

    // 3. Use museum location as fallback (example based on Getty, MET, AIC)
    if (artifact.museum === 'Getty Museum') {
        return 'United States';  // Getty is in the USA
    } else if (artifact.museum === 'Metropolitan Museum of Art') {
        return 'United States';  // MET is in the USA
    } else if (artifact.museum === 'Art Institute of Chicago') {
        return 'United States';  // AIC is in the USA
    }

    // 4. Fallback to a random country from the majorCountries array
    const randomCountry = majorCountries[Math.floor(Math.random() * majorCountries.length)];
    return randomCountry;
};

// Simulated function to return artist's country based on the artist's name
const getArtistCountry = (artist) => {
    const artistCountries = {
        "Leonardo da Vinci": "Italy",
        "Vincent van Gogh": "Netherlands",
        "Pablo Picasso": "Spain",
        "Claude Monet": "France",
        "Jackson Pollock": "United States",
        // Add more famous artists and their countries
    };

    return artistCountries[artist] || null; // Return null if the artist is not in the list
};

function App() {
    const [filters, setFilters] = useState({ status: 'all', search: '' });
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [culturalAssets, setCulturalAssets] = useState([]);

    useEffect(() => {
        fetchAllCulturalAssets();
    }, []);

    const fetchAllCulturalAssets = async () => {
        try {
            const assets = [];
            await fetchGettyAssets(assets);
            await fetchMetAssets(assets);
            await fetchAicAssets(assets);
            setCulturalAssets(assets);
        } catch (error) {
            console.error('Error fetching cultural assets:', error);
        }
    };

    const fetchGettyAssets = async (assets) => {
        let page = 1;
        let hasMoreData = true;

        while (hasMoreData) {
            const response = await fetch(`${gettyApiUrl}?page=${page}&limit=100`);
            const data = await response.json();
            if (data && data.objects) {
                for (const object of data.objects) {
                    const country = getCountryOfOrigin(object); // Get country of origin
                    assets.push({
                        id: object.id,
                        title: object.title || "No Title",
                        artist: object.artist || "Unknown Artist",
                        date: object.date_display || "Unknown Date",
                        medium: object.medium || "Unknown Medium",
                        location: { lat: 34.0780, lng: -118.4741 }, // Getty Museum location
                        country: country,
                        historicalSignificance: object.description || "No description available",
                        imageUrl: object.primary_image || ""
                    });
                }
                hasMoreData = data.objects.length === 100; // Check if there are more pages
                page++;
            } else {
                hasMoreData = false;
            }
        }
    };

    const fetchMetAssets = async (assets) => {
        let page = 1;
        let hasMoreData = true;

        while (hasMoreData) {
            const response = await fetch(`${metApiBaseUrl}/search?q=*&hasImages=true&rows=100&page=${page}`);
            const data = await response.json();
            if (data && data.objectIDs) {
                const objectIds = data.objectIDs.slice(0, 100);
                for (const id of objectIds) {
                    const objectResponse = await fetch(`${metApiBaseUrl}/objects/${id}`);
                    const objectData = await objectResponse.json();
                    const country = getCountryOfOrigin(objectData); // Get country of origin
                    assets.push({
                        id: objectData.objectID,
                        title: objectData.title || "Unknown Title",
                        artist: objectData.artistDisplayName || "Unknown Artist",
                        date: objectData.objectDate || "Unknown Date",
                        medium: objectData.medium || "Unknown Medium",
                        location: { lat: 40.7794, lng: -73.9632 }, // MET location
                        country: country,
                        historicalSignificance: objectData.artistDisplayBio || "No biography available",
                        imageUrl: objectData.primaryImage || ""
                    });
                }
                hasMoreData = objectIds.length === 100; // Check if there are more pages
                page++;
            } else {
                hasMoreData = false;
            }
        }
    };

    const fetchAicAssets = async (assets) => {
        let page = 1;
        let hasMoreData = true;

        while (hasMoreData) {
            const response = await fetch(`${aicApiBaseUrl}/search?q=*&fields=id,title,artist_display,date_display,image_id&limit=100&page=${page}`);
            const data = await response.json();
            if (data && data.data) {
                for (const artwork of data.data) {
                    const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
                    const country = getCountryOfOrigin(artwork); // Get country of origin
                    assets.push({
                        id: artwork.id,
                        title: artwork.title || "Unknown Title",
                        artist: artwork.artist_display || "Unknown Artist",
                        date: artwork.date_display || "Unknown Date",
                        medium: "N/A",
                        location: { lat: 41.8796, lng: -87.6237 }, // AIC location
                        country: country,
                        historicalSignificance: artwork.artist_display || "No artist information available",
                        imageUrl: imageUrl
                    });
                }
                hasMoreData = data.data.length === 100; // Check if there are more pages
                page++;
            } else {
                hasMoreData = false;
            }
        }
    };

    const filterAssets = () => {
        return culturalAssets.filter(asset =>
            (filters.status === 'all' || asset.status === filters.status) &&
            (!filters.search || asset.title.toLowerCase().includes(filters.search.toLowerCase()))
        );
    };

    return (
        <Router>
            <div className="App">
                <header className="app-header">
                    <nav className="nav-bar">
                        <div className="nav-links">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                        </div>
                        <h1 className="nav-title">Cultural Asset Tracker</h1>
                        <div className="nav-links">
                            <Link to="/catalogue" className="nav-link">Catalogue</Link>
                            <Link to="/map" className="nav-link">Map</Link>
                        </div>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/map" element={<CulturalAssetTracker culturalAssets={filterAssets()} selectedAsset={selectedAsset} setSelectedAsset={setSelectedAsset} filters={filters} setFilters={setFilters} />} />
                    <Route path="/filter" element={<FilterPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/catalogue" element={<Catalogue culturalAssets={culturalAssets} />} />
                </Routes>
            </div>
        </Router>
    );
}

function Homepage() {
    return (
        <div className="homepage">
            <h2>Welcome to the Cultural Asset Tracker</h2>
            <p>Explore and learn about the historical significance, movement, and current status of cultural assets worldwide.</p>
            <p>Use the navigation links above to access the interactive map or learn more about cultural heritage preservation.</p>
        </div>
    );
}

function CulturalAssetTracker({ culturalAssets, selectedAsset, setSelectedAsset, filters, setFilters }) {
    return (
        <div className="main-container">
            <div className="artifact-description-section">
                <h2>Select an artifact to view historical details</h2>
                {selectedAsset ? (
                    <>
                        <h3>Historical Significance</h3>
                        <p>{selectedAsset.historicalSignificance || 'Details not available'}</p>
                    </>
                ) : (
                    <p>Please select an artifact from the map to see details.</p>
                )}
            </div>

            <div className="filter-map-section">
                <DataBox filters={filters} setFilters={setFilters} culturalAssets={culturalAssets} />
                <Map assets={culturalAssets} setSelectedAsset={setSelectedAsset} />
            </div>

            <div className="artifact-location-section">
                <h2>Select an artifact to view its current location and archival method</h2>
                {selectedAsset ? (
                    <>
                        <h3>Current Location</h3>
                        <p>{selectedAsset.location.lat}, {selectedAsset.location.lng}</p>
                    </>
                ) : (
                    <p>Please select an artifact from the map to see details.</p>
                )}
            </div>
        </div>
    );
}

export default App;
