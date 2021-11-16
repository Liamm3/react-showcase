import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import client from '../client'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({ client }))
)

export default createStore(rootReducer, middleware)
