import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reduser } from './reduser'

export const store = createStore(reduser, applyMiddleware(thunk))