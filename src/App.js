/*
 * Top-level component consisting of a set of buttons, one
 * for each demo, and the corresponding demo grid.
 */
import './App.css';
import React from 'react';
import {Routes, Route, NavLink} from 'react-router-dom';

import './App.css';
import Simple from './components/Simple.js';
import Themes from './components/Themes.js';
import OneWay from './components/OneWay.js';
import TwoWay from './components/TwoWay.js';
import Conditional from './components/Conditional.js';
import Register from './components/Register.js';
import Ajax from './components/Ajax.js';
import Methods from './components/Methods.js';
import Events from './components/Events.js';

function App() {
    const modules = {
      '/': {
        text: 'Demonstrates a simple read-only grid of static data',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Simple.js'
      },
      '/themes': {
        text: 'Demonstrates a read-only grid of static data with a theme selector',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Themes.js'
      },
      '/oneway': {
        text: 'Demonstrates data binding in one direction',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/OneWay.js'
      },
      '/twoway': {
        text: 'Demonstrates data binding in two directions',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/TwoWay.js'
      },
      '/conditional': {
        text: 'Demonstrates conditional rendering',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Conditional.js'
      },
      '/register': {
        text: 'Demonstrates registering a method',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Register.js'
      },
      '/ajax': {
        text: 'Demonstrates using Ajax to obtain grid data',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Ajax.js'
      },
      '/methods': {
        text: 'Demonstrates methods',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Methods.js'
      },
      '/events': {
        text: 'Demonstrates grid events',
        link: 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/Events.js'
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <h2>zinggrid-react Demo</h2>
        <div className="App-buttonbar">
          <NavLink to="/" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Hello World</NavLink>
          <NavLink to="/themes" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Themes</NavLink>
          <NavLink to="/oneway" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>One-Way Binding</NavLink>
          <NavLink to="/twoway" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Two-Way Binding</NavLink>
          <NavLink to="/conditional" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Conditional Rendering</NavLink>
          <NavLink to="/register" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Register Method</NavLink>
          <NavLink to="/ajax" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Ajax</NavLink>
          <NavLink to="/methods" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Methods</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Events</NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<h4>{modules['/'].text}</h4>} />
          <Route path="/themes" element={<h4>{modules['/themes'].text}</h4>} />
          <Route path="/oneway" element={<h4>{modules['/oneway'].text}</h4>} />
          <Route path="/twoway" element={<h4>{modules['/twoway'].text}</h4>} />
          <Route path="/conditional" element={<h4>{modules['/conditional'].text}</h4>} />
          <Route path="/register" element={<h4>{modules['/register'].text}</h4>} />
          <Route path="/ajax" element={<h4>{modules['/ajax'].text}</h4>} />
          <Route path="/methods" element={<h4>{modules['/methods'].text}</h4>} />
          <Route path="/events" element={<h4>{modules['/events'].text}</h4>} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/'].link} >View source on Github</a></div>} />
          <Route path="/themes" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/themes'].link} >View source on Github</a></div>} />
          <Route path="/oneway" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/oneway'].link} >View source on Github</a></div>} />
          <Route path="/twoway" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/twoway'].link} >View source on Github</a></div>} />
          <Route path="/conditional" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/conditional'].link} >View source on Github</a></div>} />
          <Route path="/register" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/register'].link} >View source on Github</a></div>} />
          <Route path="/ajax" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/ajax'].link} >View source on Github</a></div>} />
          <Route path="/methods" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/methods'].link} >View source on Github</a></div>} />
          <Route path="/events" element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={modules['/events'].link} >View source on Github</a></div>} />
        </Routes>
      </header>
      <Routes>
        <Route exact path="/" element={<Simple />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/oneway" element={<OneWay />} />
        <Route path="/twoway" element={<TwoWay />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ajax" element={<Ajax />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
