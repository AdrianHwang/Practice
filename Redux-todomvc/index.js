import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'todomvc-app-css/index.css'


render(
  <Provider>
    <div>hello world! This is hello world program!</div>
  </Provider>,
  document.getElementById('root')
)
