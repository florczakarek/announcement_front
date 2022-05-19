import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchContext } from './context/searchContext';
import { AddForm } from './Form/AddForm';
import Header from './layout/Header';
import Map from './Map/Map';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/add' element={<AddForm />} />
      </Routes>
    </SearchContext.Provider>
  );
};
