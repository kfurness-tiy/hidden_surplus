'use strict';

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import { firebaseAuth } from './constants';


export default class Foo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      loading: true,
    }
  };

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
    return <h1>yo</h1>
  }
}
