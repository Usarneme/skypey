import React, { Component } from 'react'

import './App.css'

import Main from './Main'
import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    )
  }
}

export default App
