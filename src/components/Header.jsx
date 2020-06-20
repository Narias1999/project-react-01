import React from 'react';
import './../styles/components/Header.styl'

function Header({ children, name, imageURL }) {
  return <header className="Header">
    <figure className="Header-photo">
      <img src={imageURL} alt="Niolas Photo"/>
    </figure>
    <div className="Header-description">
      <h1 className="Header-title">{name}</h1>
      {children}
    </div>
  </header>
}

export default Header;
