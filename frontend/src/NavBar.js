import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styles.css";

const NavBar = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <NavLink to="/data" activeClassName="active">Data</NavLink>
                <NavLink to="/compare" activeClassName="active">Compare</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;
