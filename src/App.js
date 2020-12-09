import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";

import Landing from './components/Landing.js'
import {NavBar} from './components/NavBar.js'
import About from './components/About.js'
import Faq from './components/FAQ.js'
import Contact from './components/Contact.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div className="App">
    <Helmet>
        <title>Bins Storage</title>
        <meta name="description" content="Store your items and have them delivered, all without lifting a finger. Discover a valet storage facility near you." />
      </Helmet>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/FAQ'>
            <Faq />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


/* The original App.js content
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
