import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ assets, setSelectedAsset }) => {
    // Fixed coordinates for the 3 museums
    const museumLocations = [
        { id: 'getty', title: 'Getty Museum', lat: 34.0780, lng: -118.4741 },
        { id: 'met', title: 'Metropolitan Museum of Art', lat: 40.7794, lng: -73.9632 },
        { id: 'aic', title: 'Art Institute of Chicago', lat: 41.8796, lng: -87.6237 }
    ];

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <MapContainer center={[41.8781, -87.6298]} zoom={5} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Static Markers for each museum */}
                {museumLocations.map((location) => (
                    <Marker
                        key={location.id}
                        position={[location.lat, location.lng]}
                        icon={new L.Icon({
                            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                            iconSize: [25, 41], // Size of the icon
                            iconAnchor: [12, 41], // Point of the icon which will be placed at the marker's position
                            popupAnchor: [1, -34], // Point from which the popup should open
                            shadowSize: [41, 41] // Size of the shadow
                        })}
                        interactive={false} // Marker won't move with zoom
                    >
                        <Popup>
                            <strong>{location.title}</strong>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
