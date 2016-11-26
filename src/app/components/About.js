'use strict';

import React from 'react';

import WhatToGive from './WhatToGive';

export default class About extends React.Component {
  render () {
    return (
      <div>
        <h2>About Hidden Surplus</h2>
        <p>
          Hidden Surplus is a way to rethink one's finances and donations. It is a way to contribute to a greater cause without affecting your finances. The idea is to give up something you regularly consume but don't necessarily need, and donate that money to do some good.
        </p>
        <WhatToGive />
      </div>
    )
  }
}
