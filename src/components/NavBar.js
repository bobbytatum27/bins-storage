import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// imported components
import Landing from './Landing.js'

// imported styles
import './styles/NavBar.css'


export const NavBar = () => {
    return (
        <div>
          <header>
            <Link to='/'><h4>Bins Storage</h4></Link>
            <div class="topnav">
            <Link to='/About'>About</Link>
            <Link to='/FAQ'>FAQ</Link>
            <Link to='/Contact'>Contact Us</Link>
            </div>
          </header>
        </div>
    );
};
