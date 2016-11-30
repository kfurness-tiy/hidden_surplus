'use strict';

import React, { Component } from 'react';
import { firebaseAuth } from './constants';
import { Match, BrowserRouter, Link, Miss, Redirect } from 'react-router';
import { logout } from './auth';

import Login from './Login'
import Register from './Register'
import Dashboard from './protected/Dashboard'
import App from '../App';


function MatchWhenAuthed () {
  return (
  <h1>bananas</h1>
  )
}


function MatchWhenUnauthed ({component: Component, authed, ...rest}) {
  console.log(authed);
  return (
    <Match
      render={(props) => authed === false
        ? <Component {...props} />
      : <Redirect to='/dashboard' />}
    />
  )
}


export default class Foo extends Component {
state = {
    authed: false,
    loading: true,
  }


  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user is: ', user)
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  render () {
    console.log(this.state.authed);
    return (
      <div>
        <BrowserRouter>
            {({router}) => (
            <div>
              <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                  <ul className="nav navbar-nav pull-right">
                    <li>
                      <Link to="/" className="navbar-brand">App</Link>
                    </li>
                    <li>
                      <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                    </li>
                    <li>
                      {this.state.authed
                        ? <button
                            style={{border: 'none', background: 'transparent'}}
                            onClick={() => {
                              logout()
                              this.setState({authed: false})
                              router.transitionTo('/')
                            }}
                            className="navbar-brand">Logout</button>
                        : <span>
                            <Link to="/login" className="navbar-brand">Login</Link>
                            <Link to="/register" className="navbar-brand">Register</Link>
                          </span>}
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <Match pattern='/' exactly component={App} />
                  <MatchWhenUnauthed authed={this.state.authed} pattern='/login' component={Login} />

                  <Miss render={() => <h3>No Match</h3>} />
                </div>
              </div>
            </div>
          )}

        </BrowserRouter>
      </div>
    );
  }
}


// this.state.loading === true ? <h1>Loading</h1> :
// <MatchWhenUnauthed authed={this.state.authed} pattern='/register' component={Register} />
// <MatchWhenAuthed authed={this.state.authed} pattern='/dashboard' component={Dashboard} />
