import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
console.log('=================>')
render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root'),
  () => {
    console.log('redner end.')
  }
)
store.subscribe(function() {
  console.log('======================1:')
  console.log(store.getState())
})
store.subscribe(function() {
  console.log('======================2:')
  console.log(store.getState())
})