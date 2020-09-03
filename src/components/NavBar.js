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
        <div class="topnav">
            <header>
                <Link to='/Landing'>Home</Link>
                <Link to='/FAQ'>FAQ</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact Us</Link>
            </header>
        </div>
    );
};