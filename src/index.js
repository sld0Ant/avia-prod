import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.js';
import { AviaContainer } from './containers';
import './index.scss';
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store={store}>
    <AviaContainer />
  </Provider>,
  document.getElementById('root')
);
