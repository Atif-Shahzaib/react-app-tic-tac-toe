import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyGame from './components/game.js';

ReactDOM.render(
  <React.StrictMode>
    <MyGame />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
