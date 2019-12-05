import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PersonIcon from '@material-ui/icons/Person';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';   

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const classes = useStyles();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };  

  return (
    <Router>
      <div className={classes.root}>
        {/* <hr /> */}
        <List component="nav" aria-label="main mailbox folders">

        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <CheckCircleOutlineSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItem>

        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <RecentActorsIcon />
          </ListItemIcon>
          <ListItemText primary="MatchedResult" />
        </ListItem>


        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favourties" />
        </ListItem>


        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

      </List>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
          <Route path="/MatchedResult">
            <MatchedResult />
          </Route>
          <Route path="/Favourites">
            <Favourites />
          </Route>
          <Route path="/Profile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Quiz() {
  return (
    <div>
      <h2>Quiz</h2>
      <p>Quiz Content</p>
    </div>
  );
}

function MatchedResult() {
  return (
    <div>
      <h2>MatchedResult</h2>
      <p>MatchedResult Content</p>
    </div>
  );
}

function Favourites() {
  return (
    <div>
      <h2>Favourites</h2>
      <p>Favourites Content</p>
    </div>
  );
}

function MyProfile() {
    return (
      <div>
        <h2>MyProfile</h2>
        <p>MyProfile Content</p>
      </div>
    );
  }
  