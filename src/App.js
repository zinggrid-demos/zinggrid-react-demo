/*
 * Top-level component consisting of a set of buttons, one
 * for each demo, and the corresponding demo grid.
 */
import './App.css'
import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'

import './App.css'
import Simple from './components/Simple.js'
import Themes from './components/Themes.js'
import OneWay from './components/OneWay.js'
import TwoWay from './components/TwoWay.js'
import Conditional from './components/Conditional.js'
import Register from './components/Register.js'
import Fetch from './components/Fetch.js'
import Methods from './components/Methods.js'
import Events from './components/Events.js'

function App() {
    const github = 'https://github.com/zinggrid-demos/zinggrid-react-demo/blob/main/src/components/'
    const modules = {
      '/': {
        text: 'Demonstrates a simple read-only grid of static data',
        file: 'Simple.js'
      },
      '/themes': {
        text: 'Demonstrates a read-only grid of static data with a theme selector',
        file: 'Themes.js'
      },
      '/methods': {
        text: 'Demonstrates using a method call to set the data for a grid',
        file: 'Methods.js'
      },
      '/events': {
        text: 'Demonstrates grid events',
        file: 'Events.js'
      },
      '/fetch': {
        text: 'Demonstrates fetching grid data from the server',
        file: 'Fetch.js'
      },
      '/oneway': {
        text: 'Demonstrates data binding in one direction',
        file: 'OneWay.js'
      },
      '/twoway': {
        text: 'Demonstrates data binding in two directions',
        file: 'TwoWay.js'
      },
      '/conditional': {
        text: 'Demonstrates conditional rendering',
        file: 'Conditional.js'
      },
      '/register': {
        text: 'Demonstrates registering a custom rendering method (column 1)',
        file: 'Register.js'
      },
    }

  return (
    <div className="App">
      <header className="App-header">
        <h2>ZingGrid React Demo</h2>
        <div className="App-buttonbar">
          <NavLink to="/" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Hello World</NavLink>
          <NavLink to="/themes" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Themes</NavLink>
          <NavLink to="/methods" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Methods</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Events</NavLink>
          <NavLink to="/fetch" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Fetch</NavLink>
          <NavLink to="/oneway" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>One-Way Binding</NavLink>
          <NavLink to="/twoway" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Two-Way Binding</NavLink>
          <NavLink to="/conditional" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Conditional Rendering</NavLink>
          <NavLink to="/register" className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>Register Method</NavLink>
        </div>
        <Routes>
          {Object.entries(modules).map(([path, mod], index) => 
            <Route exact path={path} key={index} element={<h4>{mod.text}</h4>} />
          )}
        </Routes>
        <Routes>
          {Object.entries(modules).map(([path, mod], index) => 
            <Route exact path={path} key={index}
              element={<div className="viewsrc"><a target="_blank" rel="noreferrer" href={github + mod.file} >View {mod.file} on Github</a></div>} 
              />
          )}
        </Routes>
      </header>
      <Routes>
        <Route exact path="/" element={<Simple />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/oneway" element={<OneWay />} />
        <Route path="/twoway" element={<TwoWay />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  )
}

export default App
