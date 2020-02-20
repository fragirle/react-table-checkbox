import React from 'react';
import { MDBInput } from "mdbreact";
import Typography from '@material-ui/core/Typography';
import { lighten, makeStyles } from '@material-ui/core/styles';
import EnhancedTable from './demo.js'
import useStyles from './useStyles.js'

import { Toolbar } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
     paddingTop:12, 
     backgroundColor:'this.state.color',
  },
  footer:{
     backgroundColor: '#edaaaa',
     width: '100%',
     paddingTop: 10,
  }
});

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: 'Guest', color: 'Your color'};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  myColorHandler = (event) => {
    this.setState({color: event.target.value});
  }
  render() {
    return (
      <div style={{'paddingTop':'12px', 'backgroundColor':this.state.color}} >
        <Typography className="MuiToolbar-regular makeStyles-root-199" variant="h6"
        alignitems="center" justifycontent="center" style={{ backgroundColor: ''
        }}> 
          Hello, {this.state.username}!
          <Tooltip title="Guest">
            <IconButton aria-label="guest" style={{'paddingTop':'6px'}} >
              <PetsIcon />
            </IconButton>
          </Tooltip>
        <MDBInput hint="Your name" type="name"
          onChange={this.myChangeHandler}/>
        <MDBInput hint={this.state.color} type="name"
          onChange={this.myColorHandler}/>
        <MDBInput hint="Your color" type="color"
          onChange={this.myColorHandler}/>
        </Typography>
      </div>
    );
  }
}


// const useFieldStyles = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));
export default Field;