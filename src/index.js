import React from 'react'
import { render } from 'react-dom'
import { createStore } from './redux'
//import { Provider } from 'react-redux'
import { Provider } from './reactRedux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
store.subscribe(function() {
  console.log(store.getState())
})
