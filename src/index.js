import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'
import App from './App'

import './index.css';

const logger = createLogger();
const middleware = [ thunk, logger ]

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
