import React, { FC } from 'react';
import {  Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar: FC = () => {
  
  return (
    <nav className="nav">
      <div className="container-lg flex">
        <Link to="/" className="logo">
          <img src={logo} alt="bazar" />
        </Link>
        <form className="search-form">
          <div className="form-control search-from-control">
            <input
              type="text"
              className="input nav-input"
              placeholder="Search your products from here"
            />
            <button className="search-btn" type="submit" />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
