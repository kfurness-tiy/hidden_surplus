'use strict';

import React from 'react';

export default class DoGoodForm extends React.Component {
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
            <input type="text" id="donatedTo" />
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
        <button type="submit">Submit</button>
      </form>
    )
  }
}
