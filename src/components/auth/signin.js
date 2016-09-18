import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Sign extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" />
        </fieldset>
      </form>
      <button action="submit" className="btn btn-primary">Sign In</button>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
