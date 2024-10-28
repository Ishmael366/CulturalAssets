import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
    mapRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            map: null,
            H: null,
            ui: null,
        };
        this.createMarker = this.createMarker.bind(this);
    }

    componentDidMount() {
        // Use a constant or environment variable for the API key
        const apiKey = 'YOUR_API_KEY'; // Replace with actual API key

        // Initialize HERE Maps
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: apiKey,
        });
        const defaultLayers = platform.createDefaultLayers();

        const map = new H.Map(
            this.mapRef.current,
            defaultLayers.vector.normal.map,
            {
                center: { lat: 20, lng: 0 },
                zoom: 2,
                pixelRatio: window.devicePixelRatio || 1,
            }
        );

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        const ui = H.ui.UI.createDefault(map, defaultLayers);

        this.setState({ map, H, ui });

        // Add initial markers
        this.addMarkers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.assets !== this.props.assets) {
            this.addMarkers();
        }
    }

    addMarkers() {
        const { map } = this.state;
        if (!map) return;

        // Clear previous markers
        map.removeObjects(map.getObjects());

        // Add new markers for each asset
        this.props.assets.forEach(this.createMarker);
    }

    createMarker(asset) {
        const { H, map } = this.state;
        const markerElement = document.createElement('div');
        markerElement.className = `map-marker ${asset.status}`;

        const marker = new H.map.DomMarker(
            { lat: asset.location.lat, lng: asset.location.lng },
            { icon: new H.map.DomIcon(markerElement) }
        );

        marker.addEventListener('tap', () => {
            if (this.props.setSelectedAsset) {
                this.props.setSelectedAsset(asset);
            }
        });

        map.addObject(marker);
    }

    componentWillUnmount() {
        if (this.state.map) {
            this.state.map.dispose();
        }
    }

    render() {
        return <div ref={this.mapRef} className="map-container" role="region" aria-label="map"></div>;
    }
}

export default Map;
