import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderMenuItems() {
    if (this.props.authenticated) {
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item">Log Out</li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign In</li>
          <li className="nav-item">Sign Up</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        {this.renderMenuItems()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);
