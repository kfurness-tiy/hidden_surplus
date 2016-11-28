'use strict';

import React from 'react';

import DoGoodForm from './DoGoodForm';
import Login from './Login'
import Register from './Register'

export default class DoGood extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Login />
          <Register />
        </div>
        <div className="form">
          <h2>Do Good</h2>
          <DoGoodForm />
        </div>
      </div>
    )
  }
}
