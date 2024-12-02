// src/api.js

// Getty API
export const fetchGettyAssets = async () => {
    const response = await fetch('https://data.getty.edu/museum/collection/object/');
    const data = await response.json();
    return data;
};

// Met API
export const fetchMetAssets = async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
    const data = await response.json();
    return data;
};

// AIC API
export const fetchAicAssets = async () => {
    const response = await fetch('https://api.artic.edu/api/v1/artworks');
    const data = await response.json();
    return data;
};
