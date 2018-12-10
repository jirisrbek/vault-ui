import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    owerflow: 'auto',
  }
};

class SimpleList extends Component {
  static propTypes = {
      classes: PropTypes.object.isRequired,
  };

  render() {
    return (
            <List className={this.props.classes.root}>
                {this.props.paths.filter((path) => path.endsWith('/')).sort().map((dir) => (
                  <ListItem button onClick={()=>this.props.onDirClick(dir)}>
                    <ListItemIcon><Folder/></ListItemIcon>
                    <ListItemText>{dir.split('/').reverse()[1]}</ListItemText>
                  </ListItem>
                ))} 
                {this.props.paths.filter((path) => ! path.endsWith('/')).sort().map((secret) => (
                    <ListItem button 
                              onClick={() => this.props.onSecretClick(secret)}
                              selected={secret === this.props.selectedSecret ? true :false}
                    >
                      <ListItemText>{secret.split('/').reverse()[0]}</ListItemText>
                    </ListItem>
                ))}         
            </List>
          )
  }    
}

export default withStyles(styles)(SimpleList);