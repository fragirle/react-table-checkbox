import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';

import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#edaaaa',
    margin: 0,
    padding: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  footer:{
     backgroundColor: '#edaaaa',
     width: '100%',
     paddingTop: 10,
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} >
      <Box 
        display="flex"
        alignItems="center">
          <BottomNavigationAction />
          <Typography className={classes.footer}>（c）OwO Inc.</Typography>
      </Box>
    </BottomNavigation>
  );
}