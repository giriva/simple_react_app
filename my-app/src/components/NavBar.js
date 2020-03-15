import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from './homePage';
import Blog from './blogPage';
import Contact from './contactsPage';

export default class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h3>Test</h3>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink> </li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}