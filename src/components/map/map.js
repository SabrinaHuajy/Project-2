import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ lat, lng }) {
  const [markerPosition, setMarkerPosition] = useState([lat, lng]);

  const handleMapClick = (event) => {
    setMarkerPosition([event.latlng.lat, event.latlng.lng]);
  };

  return (
    <MapContainer center={markerPosition} zoom={13} onClick={handleMapClick}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerPosition}>
        <Popup>
          Weather information for this location
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
