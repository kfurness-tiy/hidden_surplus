'use strict';

import React from 'react';

import DoGoodForm from './DoGoodForm';

export default class DoGood extends React.Component {
  render () {
    return (
      <div id="doGood">
        <h2>Do Good</h2>
        <DoGoodForm />
      </div>
    )
  }
}
