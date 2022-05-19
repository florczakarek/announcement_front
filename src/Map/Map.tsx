import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Map.css';
import '../utils/pinIcon';
import 'leaflet/dist/leaflet.css';
import { SearchContext } from '../context/searchContext';
import { SimpleAddEntity } from 'types';
import SingleAd from './SingleAd';

const Map = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAddEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ads/search/${search}`);
      const data = await res.json();
      setAds(data);
    })();
  }, [search]);

  return (
    <div className='map'>
      <MapContainer center={[52.0853275, 21.2603429]} zoom={15}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {ads.map((ad) => {
          return (
            <Marker key={ad.id} position={[ad.lat, ad.lon]}>
              <Popup>
                <SingleAd id={ad.id} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
