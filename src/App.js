import React from 'react';
import { ROUTE_ENDPOINTS } from './constants/endpoints';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import dotenv from 'dotenv';

import styles from './App.css';
import animation_styles from './animate.css';
import MainPage from './components/frames/MainPage';
import logo from './logo.png';


export default class App extends React.Component {
  render() {
  return (
    <Router>
      <MainPage logo={logo}/>
    </Router>
  );
  }
}





/*
<div className="App">
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
</div>
*/
