'use strict';

import React from 'react';

import ContTotals from './ContTotals';

import { fbRef, fbDoGood } from './constants';

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
  fbRef.on("child_added", (snapshot) => {
    updateToDo(snapshot.val(), snapshot.key);
    this.setState({
      doGood: doGood,
    });
  }).bind(this)
}

  render () {
    console.log("test",this.state.doGood);
    return (
      <div>
        <h2>Collective Contributions</h2>
        <p>Small acts can make a big difference. Just look at all the good being done by people donating their hidden surplus. Way to make the world a better place!</p>
        <ContTotals doGood={this.state.doGood} />
      </div>
    )
  }
}
