import { useState } from 'react';
import './App.css';
import { SearchContext } from './context/searchContext';
import Header from './layout/Header';
import Map from './Map/Map';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      <Map />
    </SearchContext.Provider>
  );
};
