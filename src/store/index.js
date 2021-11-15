import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import client from '../client'

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ client }))
)
