// components/Map/index.tsx
'use client';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const center = {
  lat: -23.62737,
  lng: -46.93863
};

const Map = () => {
  return (
    <div  className='w-screen md:w-1/2 h-[50vh] relative '>
      <MapContainer center={center} zoom={16} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
