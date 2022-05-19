import React, { SyntheticEvent, useContext, useState } from 'react';
import { SearchContext } from '../context/searchContext';
import { Btn } from '../common/Button';
import './Header.css';

const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <strong>Local</strong> Announcements
      </h1>
      <Btn to='/add' text='Add your announcement' />
      <form className='search' onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Btn text='Search' />
      </form>
    </header>
  );
};

export default Header;
