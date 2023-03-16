import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "./map.css";



<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

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
