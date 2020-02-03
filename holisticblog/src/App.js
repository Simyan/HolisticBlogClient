import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import AuthenticateComponent from './AuthenticateComponent';
import Login from './Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Login" component={Login} />
          <AuthenticateComponent>
            <Route path="/Home" component={Home} />
          </AuthenticateComponent>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;