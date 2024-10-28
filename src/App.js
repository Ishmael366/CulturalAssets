// App.js - Cultural Asset Tracker
import React, { useState, useEffect } from 'react';
import Map from './Map';
import DataBox from './DataBox';
import './App.css';

function App() {
  const [culturalAssets, setCulturalAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [filters, setFilters] = useState({ status: 'all' });

  useEffect(() => {
    // Fetch cultural asset data - API placeholders
    fetchCulturalAssets();
  }, []);

  const fetchCulturalAssets = async () => {
    // Simulate fetch with placeholder data
    const assets = [
      { id: 1, name: 'The Rosetta Stone', status: 'recovered', location: { lat: 51.5194, lng: -0.1270 } },
      { id: 2, name: 'Elgin Marbles', status: 'missing', location: { lat: 37.9715, lng: 23.7267 } },
      { id: 3, name: 'Nefertiti Bust', status: 'looted', location: { lat: 52.5238, lng: 13.4124 } }
    ];
    setCulturalAssets(assets);
  };

  const filterAssets = () => {
    return culturalAssets.filter(asset =>
        filters.status === 'all' || asset.status === filters.status
    );
  };

  return (
      <div className="App">
        <h1>Cultural Asset Tracker</h1>
        <DataBox filters={filters} setFilters={setFilters} />
        <Map assets={filterAssets()} setSelectedAsset={setSelectedAsset} />
        {selectedAsset && <AssetDetails asset={selectedAsset} />}
      </div>
  );
}

function AssetDetails({ asset }) {
  return (
      <div className="asset-details">
        <h2>{asset.name}</h2>
        <p>Status: {asset.status}</p>
        <p>Location: Lat {asset.location.lat}, Lng {asset.location.lng}</p>
        {/* Additional details like digital archive status can be added here */}
      </div>
  );
}

export default App;
