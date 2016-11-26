'use strict';

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Contributions from './Contributions';
import DoGood from './DoGood';
import Jumbotron from './Jumbotron';
import Main from './Main';
import Nav from './Nav';

export default class App extends React.Component {

  render () {
    return (
        <div>
          <Nav />
          <Jumbotron />
          <Main />
          <Contributions />
          <DoGood />
        </div>
    )
  }
}
