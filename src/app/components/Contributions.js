'use strict';

import React from 'react';

import { fbRef, fbDoGood } from './authentication/constants';

let doGood = [];

function updateToDo (val, id) {
  doGood.push(val);
}

export default class Contributions extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    doGood: doGood,
  }
};

  componentDidMount() {
  fbDoGood.on("child_added", (snapshot) => {
    updateToDo(snapshot.val(), snapshot.key);
    this.setState({
      doGood: doGood,
    });
  }).bind(this)
}

  render () {
    let total = 0;
    this.state.doGood.map((c,i,a) => {
      total += c.amount
      return total
    })
    return (
      <div>
        <h2>Collective Contributions</h2>
        <p>Small acts can make a big difference. Just look at all the good being done by people donating their hidden surplus. Way to make the world a better place!</p>
        <h3>Total</h3>
        <h1>${total}</h1>

      </div>
    )
  }
}
