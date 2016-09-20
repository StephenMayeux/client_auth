import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <h3>Super secret feature for users only!</h3>
    );
  }
}

export default connect(null, actions)(Feature);
