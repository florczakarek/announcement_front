import React from 'react';
import Button from '../common/Button';
import './Header.module.css';

const Header = () => {
  return (
    <header>
      <h1>
        <strong>Local</strong> Announcements
      </h1>
      <Button text='Add your announcement' />
      <div className='search'>
        <input type='text' />
        <Button text='Search' />
      </div>
    </header>
  );
};

export default Header;
