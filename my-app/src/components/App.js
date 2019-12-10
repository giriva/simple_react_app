import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/App.css';
import Demo from './drawer';
import SidebarExample from './sidebar';

function App() {
  return (
    <div  className="App">    
      <header  className="App-header">    
        <body>  
          <Demo  />
        </body>
      </header>  
      <SidebarExample>Test</SidebarExample>
     
    </div>
  );
}

export  default  App;