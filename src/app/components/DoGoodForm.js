'use strict';

import React from 'react';
import { fbRef, fbDoGood } from './constants.js';

function addDoGood (obj) {
  console.log("obj",obj);
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;

  let updates = {};
  updates['doGood/' + doGoodId] = doGood;
  fbRef.update(updates);
  }

export default class DoGoodForm extends React.Component {

  getValues() {
    let doGood = {
      name: document.getElementById('name').value,
      amount: Number(document.getElementById('amount').value),
      donateTo: document.getElementById('donateTo').value,
      gaveUp: document.getElementById('gaveUp').value
    }
    console.log(doGood);
    addDoGood(doGood);
  }

  render () {
    return (
      <form>
        <div>
          <label htmlFor="name">Name:
            <input type="text" id="name" placeholder="Joe" />
          </label>
        </div>
        <div>
          <label htmlFor="amount">Amount Donated: $
            <input type="text" id="amount" placeholder="5" />
          </label>
        </div>
        <div>
          <label htmlFor="gaveUp">What did you give up to donate?
            <input type="text" id="gaveUp" placeholder="coffee" />
          </label>
        </div>
        <div>
          <label htmlFor="gaveUpCategory">What category does what you gave up fall into?
            <select name="select">
              <option value="value1">Food/Beverage</option>
              <option value="value2" selected>Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="donateTo">Donated to:
            <input type="text" id="donateTo" placeholder="Food Bank"/>
          </label>
        </div>
        <div>
          <label htmlFor="socialMedia">Share on:
            <input type="checkbox" id="facebook" /> Facebook <br />
            <input type="checkbox" id="twitter" /> Twitter
          </label>
        </div>
        <button onClick={this.getValues.bind(this)} type="submit">Submit</button>
      </form>
    )
  }
}
