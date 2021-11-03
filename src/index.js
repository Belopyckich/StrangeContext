import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {ModalContext} from './context/ModalContext';
import {store} from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ModalContext>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </ModalContext>
  </Provider>,
  document.getElementById('root')
);