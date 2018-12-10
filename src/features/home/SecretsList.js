import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { PathBar, SimpleList} from './';

export class SecretsList extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-secrets-list">
        <PathBar path={this.props.home.secretsListPath} 
                 onClick={this.props.actions.changeSecretsListPath}
                 onFilterChange={this.props.actions.changeSecretsListFilter}
                 filter={this.props.home.secretsListFilter}
                 
        />       
        <SimpleList paths={this.props.paths} 
                    onDirClick={this.props.actions.changeSecretsListPath}
                    onSecretClick={this.props.actions.changeSelectedSecret}
                    selectedSecret={this.props.selectedSecret}
        /> 
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  const path = state.home.secretsListPath;
  const filter = state.home.secretsListFilter;
  const paths = state.home.secretsPaths;
  return {
    home: state.home,
    paths: paths.filter((p)=>p.match(filter)).filter((p)=>p.match(path+'[^/]+/?$')),
    selectedSecret: state.home.selectedSecret,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretsList);
