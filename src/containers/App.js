import React from 'react'
import _ from 'lodash'

import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

import store from '../store'

import './App.css'

const App = () => {
  const { contacts, user, activeUserId  } = store.getState()
  console.log('Rendering App with store state:')
  console.dir(store.getState())

  return (
    <div className="App app">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  )
}

export default App
