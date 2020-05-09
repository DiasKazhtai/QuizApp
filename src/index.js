import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu/Menu'

ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
