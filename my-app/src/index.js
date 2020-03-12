import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import NavBar from './components/NavBar'


ReactDOM.render(<NavBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

serviceWorker.unregister();
