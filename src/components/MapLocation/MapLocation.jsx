import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const position = [51.505, -0.09];

const MapLocation = () => {
  return (
    <div className="container overflow-hidden">
      <MapContainer style={{height:"200px", width:"200px"}} center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; attribution: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
    </div>
  );
};

export default MapLocation;
