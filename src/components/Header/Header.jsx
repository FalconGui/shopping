import React from 'react';
import CartButton from '../CartButton/CartButton';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="container">
        <h2><a href="#">Fenrir Store</a></h2>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
