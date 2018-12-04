import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const SimpleList = (props) => {
    return (
          <List>
          {props.paths.filter((path) => path.endsWith('/')).sort().map((dir) => (
            <ListItem button>
              <ListItemIcon><Folder/></ListItemIcon>
              <ListItemText>{dir.split('/').reverse()[1]}</ListItemText>
            </ListItem>
          ))} 
          {props.paths.filter((path) => ! path.endsWith('/')).sort().map((secret) => (
            <ListItem button>
              <ListItemText>{secret.split('/').reverse()[0]}</ListItemText>
            </ListItem>
          ))}         
        </List>
    )    
}

const PathBar = (props) => {
 const path = props.path.split('/').filter((p)=>(p !== "")); 
 return (
  <AppBar position="static">
    <Toolbar>
      {path.map((p,i) => (
        <Button  color="inherit">{i===0 && "/"}{p}/</Button>
      ))}
    </Toolbar>
  </AppBar>
 )
}

export default class SecretsList extends Component {
  static propTypes = {
        paths: PropTypes.object.isRequird,
  };

  render() {
    return (
      <div className="home-secrets-list">
        <PathBar path="/secret/test1/test2/"/>
        <SimpleList paths={this.props.paths}/>
      </div>
    );
  }
}
