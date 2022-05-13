import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import '../utils/pinIcon';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className='map'>
      <MapContainer center={[52.0853275, 21.2603429]} zoom={15}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[52.0853275, 21.2603429]}>
          <Popup>
            <h4>Karczew</h4>
            <p>My place to live</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
