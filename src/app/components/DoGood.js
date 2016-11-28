'use strict';

import React from 'react';

import DoGoodForm from './DoGoodForm';
import Login from './Login'

export default class DoGood extends React.Component {
  render () {
    return (
      <div>
        <div>
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
