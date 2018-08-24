import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'


import Dashboard from './containers/dashboard'

import App from './containers/app'
import Login from './containers/login';
import SignUp from './containers/signup'

class Routes extends Component {

  render() {
    return (

      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <App>
              <Route exact path="/dashboard" component={Dashboard} />
            </App>
          </Switch>
        </div>
      </HashRouter>

    )
  }
}

export default Routes;