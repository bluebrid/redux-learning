import { createStore, applyMiddleware, compose } from '../redux'
import thunk from '../reduxThunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
    )
  )
  // const middlewares = applyMiddleware(thunk, api)
  // middlewares: 
  // {
  //   ...store,
  //   dispatch
  // }
  // const enhancer = compose(middlewares)
  // const store = createStore(
  //   rootReducer,
  //   preloadedState,
  //   enhancer
  // )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
