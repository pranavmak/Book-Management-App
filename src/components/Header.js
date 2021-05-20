import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>BOOK MANAGEMENT APP</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
         <button >BOOKS LIST</button>
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
         <button>ADD BOOKS </button> 
        </NavLink>
      </div>
    </header>
  );
};

export default Header;