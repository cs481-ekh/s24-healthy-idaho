// Using leaflet to display map of Idaho, not sure how we'll use this with the data yet
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
    return (
        <MapContainer center={[44.0682, -114.7420]} zoom={6} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
}

export default Map;
