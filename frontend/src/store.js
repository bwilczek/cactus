import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import immutability from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

import combinedReducer from './reducers'

const middleware = process.env.NODE_ENV !== 'production' ?
  [immutability(), thunk, promiseMiddleware(), logger] :
  [thunk, promiseMiddleware()];

let defaultState = {}

const store = createStore(combinedReducer, defaultState, applyMiddleware(...middleware))

export default store
