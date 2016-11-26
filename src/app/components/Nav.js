'use strict';

import React from "react";

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <img src="./app/img/logo_placeholder.png" />
        <nav>
          <ul>
            <li>About</li>
            <li>Collective Contributions</li>
            <li>Do Good</li>
            <li>LogIn</li>
          </ul>
        </nav>
      </div>
    )
  }
}

// TODO Potentially turn into "dumb component"
