import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/';
import './index.scss';

import { Provider } from 'react-redux';
import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
