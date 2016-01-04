import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'todomvc-app-css/index.css'
import configureStore from './store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <div>hello world! This is hello world program!</div>
  </Provider>,
  document.getElementById('root')
)
