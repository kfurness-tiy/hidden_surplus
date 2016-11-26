'use strict';

import React from 'react';

import About from './About';
import StartDoingGood from './StartDoingGood';
import WhereToGive from './WhereToGive';

export default class Main extends React.Component {
  render () {
    return (
      <main>
        <About />
        <StartDoingGood />
        <WhereToGive />
      </main>
    )
  }
}
