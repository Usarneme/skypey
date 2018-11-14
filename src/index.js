import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import './index.css'

import * as serviceWorker from './serviceWorker'

import store from './store'

const render = () => {
  console.log('index.js entrypoint with store: ',store.getState());
  return ReactDOM.render(<App />, document.getElementById('root'))
}
// initially render the app
render()
// have the redux store subscribe to any changes to the store to update the rendered display
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
