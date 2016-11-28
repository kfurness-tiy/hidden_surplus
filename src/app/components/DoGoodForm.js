'use strict';

import React from 'react';

export default class DoGoodForm extends React.Component {

  getValues() {
    let doGood = {
      name: document.getElementById('name').value,
      amount: document.getElementById('amount').value,
      donateTo: document.getElementById('donateTo').value,
      gaveUp: document.getElementById('gaveUp').value
    }
    // let name = document.getElementById('name').value;
    // let amount = document.getElementById('amount').value;
    // let donateTo = document.getElementById('donateTo').value;
    // let gaveUp = document.getElementById('gaveUp').value;
    //
    // console.log({name});
    // console.log({amount});
    // console.log({donateTo});
    // console.log({gaveUp});
    console.log(doGood);
  }

  render () {
    return (
      <form>
        <div>
          <label htmlFor="name">Name:
            <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label htmlFor="amount">Amount Donated:
            <input type="text" id="amount" />
          </label>
        </div>
        <div>
          <label htmlFor="donateTo">Donated to:
            <input type="text" id="donateTo" />
          </label>
        </div>
        <div>
          <label htmlFor="gaveUp">What did you give up to donate?
            <textarea type="text" id="gaveUp" />
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
