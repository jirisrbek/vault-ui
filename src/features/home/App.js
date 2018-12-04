import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SecretsList } from './';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router.
  You should adjust it according to the requirement of your app.
*/
const paths = ['/secret/test/','/secret/test1','/secret/test2','/secret/test3/','/secret/atest4','/secret/atest4/'];

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
      <div className="home-app">
        <SecretsList paths={paths}/>
        <div className="page-container">{this.props.children}</div>
      </div>
    );
  }
}
