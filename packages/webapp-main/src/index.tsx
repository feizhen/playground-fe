import React from 'react';
import ReactDOM from 'react-dom';
import Garfish from 'garfish';
import 'reset-css';

import LayoutContainer from './containers/LayoutContainer/index';

import { reportWebVitals } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <LayoutContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

Garfish.run({
  basename: '/',
  domGetter: '#app-container',
  apps: [
    {
      name: 'test',
      activeWhen: '/test',
      entry: 'http://localhost:3000'
    }
  ]
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
