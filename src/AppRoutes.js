import React, { Component } from 'react'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'
import { connect } from 'react-redux'
import history from './history'
// COMPONENTS
import Login from './containers/login/index';
import Signup from './containers/signup';
import Home from './containers/home';
import ForgetPassword from './containers/forgetPassword'
import './assets/scss/_fonts.scss';
import './App.css'


class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch >
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>     
          <Route exact path="/" component={Home}></Route> 
          <Route exact path="/forgetPassword" component={ForgetPassword}></Route>          

     
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