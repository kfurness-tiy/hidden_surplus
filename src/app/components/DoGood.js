'use strict';

import React from 'react';

import DoGoodForm from './DoGoodForm';
import Login from './authentication/Login'
import Register from './authentication/Register'

import { firebaseAuth } from './authentication/constants'

export default class DoGood extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      loading: true
    }
  };
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
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
    return (
      <div>
        <div>
          <Register />
          <Login />
        </div>
        <div className="form">
          <h2>Do Good</h2>
          <DoGoodForm />
        </div>
      </div>
    )
  }
}
