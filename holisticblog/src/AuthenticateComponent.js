import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AuthenticateComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const jwt =  localStorage.getItem('jwttoken');
    if (!jwt) {
      this.props.history.push('/Login');
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(AuthenticateComponent);