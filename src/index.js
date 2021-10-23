import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ModalContext} from './context/ModalContext';

ReactDOM.render(
  <ModalContext>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </ModalContext>,
  document.getElementById('root')
);