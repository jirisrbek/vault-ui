import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  label: {
    textTransform: 'none',
    fontSize: 24,
    padding: '8px 0',
  },
};


class PathBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    const path = this.props.path.split('/').filter(p => p !== '');
    return (
      <AppBar position="static">
        <Toolbar>
          {path.map((p, i) => {
            const newPath = path.slice(0, i + 1).reduce((a, c) => a + c + '/', '/');
            return (
              <Button
                className={classes.label}
                color="inherit"
                onClick={() => this.props.onClick(newPath)}
              >
                {i === 0 && '/'}
                {p}/
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(PathBar);
