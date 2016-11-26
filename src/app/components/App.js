'use strict';

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Nav from "./Nav.js";

export default class App extends React.Component {

  render () {
    return (
        <div>
          <Nav />
        </div>
    )
  }
}
