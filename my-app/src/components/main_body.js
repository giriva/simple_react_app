import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import SideBar from './sidebar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import theme from './theme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appBar} theme={theme}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              FindMyBuddy
            </Typography>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider> 
    <Drawer 
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      {/* <Divider /> */}
      <SideBar />
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
        </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
        tincidunt.
        </Typography>
    </main>
    </div >
  );
}


