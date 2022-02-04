/*
 * Top-level component consisting of a set of buttons, one
 * for each demo, and the corresponding demo chart.
 */
import './App.css'
import React, {useState, useEffect} from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'

import Conditional from './components/Conditional.js'
import Events from './components/Events.js'
import Fetch from './components/Fetch.js'
import GraphQLRead from './components/GraphQL-read.js'
import GraphQLCRUD from './components/GraphQL-crud.js'
import Methods from './components/Methods.js'
import OneWay from './components/OneWay.js'
import Register from './components/Register.js'
import Simple from './components/Simple.js'
import Themes from './components/Themes.js'
import TwoWay from './components/TwoWay.js'
import './App.css'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {coy} from 'react-syntax-highlighter/dist/esm/styles/prism'

function App() {
    const [showCode, setShowCode] = useState(false)
    const [version, setVersion] = useState('')
    const [pubDate, setPubDate] = useState('')

    const github = 'https://github.com/zinggrid-demos/zinggrid-react-demo'
    const gitBlob = github + '/blob/main/src/components/'
    const gitIssues = github + '/issues'
    const pricing = 'https://zinggrid.com/pricing'

    const modules = {
      '/': {
        label: 'Hello World',
        text: 'Demonstrates a simple read-only grid of static data',
        info: 'Simple demo of a ZingGrid with local, static data obtained from a React state variable. Note that the data attribute provided to ZingGrid is a JSON rendering of the data object.',
        file: 'Simple.js',
        code: ''
      },
      '/themes': {
        label: 'Themes',
        text: 'Demonstrates a read-only grid of static data with a theme selector',
        info: 'Here we obtain a React reference to the grid so we can change its theme and set the data after it has been displayed. Note that the data does not need to be converted to JSON when using setData().',
        file: 'Themes.js',
        code: ''
      },
      '/methods': {
        label: 'Methods',
        text: 'Demonstrates using a method call to set the data for a grid',
        info: 'Using references to the grid and a textarea, we use the text to set the data for the grid when the "Set Data" button is pressed.',
        file: 'Methods.js',
        code: ''
      },
      '/events': {
        label: 'Events',
        text: 'Demonstrates grid events',
        info: 'In this demo we attach event listeners to the grid and log the events to a textarea.',
        file: 'Events.js',
        code: ''
      },
      '/fetch': {
        label: 'Data from REST Server',
        text: 'Demonstrates fetching grid data from a REST server',
        info: 'Here we fetch the data for the grid from the server, with a 2-second delay added to simulate a slow connection so we can see the "loading" indicator.',
        file: 'Fetch.js',
        code: ''
      },
      '/graphql-read': {
        label: 'Read Data from GraphQL Server',
        text: 'Demonstrates fetching grid data from a GraphQL server',
        info: "Using ZingGrid's built-in GraphQL support, we obtain grid data from a public GraphQL endpoint.",
        file: 'GraphQL-read.js',
        code: ''
      },
      '/graphql-crud': {
        label: 'GraphQL CRUD',
        text: 'Demonstrates reading and writing grid data from a GraphQL server',
        info: "This example demonstrates full GraphQL Create/Read/Update/Delete support by specifying all 5 queries/mutations. We access a public GraphQL server where the database is reset every hour on the hour.",
        file: 'GraphQL-crud.js',
        code: ''
      },
      '/oneway': {
        label: 'One-Way Binding',
        text: 'Demonstrates data binding in one direction',
        info: 'This demo shows a textarea bound to a grid so that changes to the textarea instantly appear in the grid. Additional controls demonstrate changing various aspects of the grid.',
        file: 'OneWay.js',
        code: ''
      },
      '/twoway': {
        label: 'Two-Way Binding',
        text: 'Demonstrates data binding in two directions',
        info: 'Here we show a grid with editing enabled. Changes to the grid are reflected in the textarea, and changes to the textarea update the data in the grid.',
        file: 'TwoWay.js',
        code: ''
      },
      '/conditional': {
        label: 'Conditional Rendering',
        text: 'Demonstrates conditional rendering',
        info: 'Here we dynamically render zg-columns so we can show multiple datasets in a single grid. ZingGrid auotmatically picks up the mutation and adjusts the layout of the columns.',
        file: 'Conditional.js',
        code: ''
      },
      '/register': {
        label: 'Register Method',
        text: 'Demonstrates registering a custom rendering method',
        info: 'Here we register a custom rendering method that the ZingGrid applies when rendering column 1, converting the text to all uppercase.',
        file: 'Register.js',
        code: ''
      },
    }

  const [mods, setMods] = useState(modules)

  // Load all of the code files and the
  // publish-info file
  async function getCodeAndInfo() {
    try {
      for(let mod of Object.values(modules)) {
        const resp = await fetch('code/' + mod.file)
        mod.code = await resp.text()
      }

      setMods(modules)

      const resp = await fetch('publish-info.json')
      const info = await resp.json()

      setVersion(info.version)
      setPubDate(info.date)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => getCodeAndInfo(), [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-titlebar">
          <div className="App-titlebar-icon left">
            <a href="https://zinggrid.com" target="_blank" rel="noreferrer"><img src="logo.png" alt="ZingGrid logo"/></a>
          </div>
          <h2>ZingGrid React Demo</h2>
          <div className="App-titlebar-icon right">
            <a href={github} target="_blank" rel="noreferrer"><img src="github.png" alt="Github logo"/></a>
          </div>
        </div>
        <div className="App-buttonbar">
          {Object.entries(modules).map(([path, mod], index) =>
            <NavLink to={path} key={index} className={({isActive}) => isActive ? "App-button-active" : "App-button-plain"}>{mod.label}</NavLink>
          )}
        </div>
      </header>
      <div className="App-demo-block">
        <div className="App-demo-titlebar">
          <Routes>
            {Object.entries(modules).map(([path, mod], index) =>
              <Route exact path={path} key={index} element={<>
                <span>{mod.text}</span>&nbsp;
                <div className="tooltip">
                  <img src="info_icon.png" alt="more info button"></img>
                  <span className="tooltiptext">{mod.info}</span>
                </div>
              </>} />
            )}
          </Routes>
        </div>
        <div className="App-demo-demo">
          <Routes>
            <Route exact path="/" element={<Simple />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/events" element={<Events />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/graphql-read" element={<GraphQLRead />} />
            <Route path="/graphql-crud" element={<GraphQLCRUD />} />
            <Route path="/oneway" element={<OneWay />} />
            <Route path="/twoway" element={<TwoWay />} />
            <Route path="/conditional" element={<Conditional />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
      <div className="App-code-block">
        <div className="App-code-buttonbar">
          <div className="left">
            <button className="App-source-button" onClick={() => setShowCode(!showCode)}>{showCode ? 'Hide' : 'Show'} Source</button>
          </div>
          <div className="right">
            <Routes>
              {Object.entries(modules).map(([path, mod], index) =>
                <Route exact path={path} key={index}
                  element={<button className="App-source-button" onClick={() => window.open(gitBlob + mod.file, '_blank')}>View source on Github</button>} />
              )}
            </Routes>
          </div>
        </div>
        <div className={`App-code-code ${showCode ? 'visible' : 'invisible'}`}>
          <Routes>
            {Object.entries(mods).map(([path, mod], index) =>
              <Route exact path={path} key={index}
                element={<SyntaxHighlighter language="javascript" style={coy}>{mod.code}</SyntaxHighlighter>} />
            )}
          </Routes>
        </div>
      </div>
      <div className="App-footer">
        <div className="App-footer-row1">
            <a href={pricing} target="_blank" rel="noreferrer">Support ZingGrid with a Commercial License (more info...)</a>
            <span className="App-footer-right">v{version} Updated {pubDate}</span>
        </div>
        <div className="App-footer-row2">
            <a href={gitIssues} target="_blank" className="App-footer-right" rel="noreferrer">Report Bug</a>
        </div>
      </div>
    </div>
  )
}

export default App
