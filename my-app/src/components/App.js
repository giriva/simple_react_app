import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import Demo from './main_body';
import ReactDOM from 'react-dom';
import SideBar from './sidebar';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          A place to post...
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home pageeeee
        </a> */}
        <body>
          <a
            className="App-left-sidebar"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Main Menu
        </a>
        <Demo />
        </body>
      </header>
    </div>
  );
}

export default App;
