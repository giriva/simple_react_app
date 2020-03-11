import React, { Component } from 'react';
// import logo from '../styles/logo.svg';
import '../styles/App.css';
import Demo from './drawer';
import SidebarExample from './sidebar';

class App extends React.Component 
{
  render() {
    const classes=this.props.classes; 
    return (
      <div  className="App">    
        <header  className="App-header">    
          <body>  
            <Demo  />
          </body>
        </header>  
        <SidebarExample />
      </div>
      );
     }
}
export  default  App;