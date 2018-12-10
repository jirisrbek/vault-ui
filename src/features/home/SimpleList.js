import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';

export default class SimpleList extends Component {
  static propTypes = {

  };

  render() {
    return (
            <List>
                {this.props.paths.filter((path) => path.endsWith('/')).sort().map((dir) => (
                  <ListItem button onClick={()=>this.props.onDirClick(dir)}>
                    <ListItemIcon><Folder/></ListItemIcon>
                    <ListItemText>{dir.split('/').reverse()[1]}</ListItemText>
                  </ListItem>
                ))} 
                {this.props.paths.filter((path) => ! path.endsWith('/')).sort().map((secret) => (
                    <ListItem button>
                      <ListItemText>{secret.split('/').reverse()[0]}</ListItemText>
                    </ListItem>
                ))}         
            </List>
          )
  }    
}
