import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../styles/list.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp'; 
import SignupForm from './form';
import CSSGrid from './cssGrid'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div></div>,
    main: () => (
    <React.Fragment>
    <h3>Home</h3> <CSSGrid/>
    </React.Fragment>)
  },
  {
    path: "/About us",
    sidebar: () => <div></div>,
    main: () => <h3>About us</h3>
  },
  {
    path: "/Favourites",
    sidebar: () => <div></div>,
    main: () => <h3>Favorites</h3>
  },
  {
    path: "/Profile",
    sidebar: () => <div></div>,
    main: () => <h3>Profile</h3>
  }
];

export default function SidebarExample() {
  
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "260px",
            width: "15%",
            background: "#aacee8"
          }}
        > 
          <div>
          {/* <h2>Home</h2> */}
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
                <Link to="/">Home
                </Link>
            </li>
            <li>
              <Link to="/About us">About us</Link>
            </li>
            <li>
              <Link to="/Favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
          </div>
          {/*  */}
        </div>

        <div style={{ flex: 1, padding: "180px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
 }
