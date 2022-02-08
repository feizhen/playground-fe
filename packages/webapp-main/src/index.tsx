import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import LayoutContainer from './layouts/LayoutContainer/index';
import 'reset-css';

import { reportWebVitals } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <LayoutContainer >
      Let's Play
    </LayoutContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
