import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'
// COMPONENTS
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'


class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch >
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          {/* <PrivateRoute path="/home" component={Home} isAuthenticated={this.props.user}></PrivateRoute> */}
          {/* <Route component={ErrorPage}></Route> */}
        </Switch>
      </Router >
    )
  }
}

const mapStateToProps = (params) => {
  console.log("params", params)
  return params
}

export default connect(mapStateToProps, {})(AppRoutes)