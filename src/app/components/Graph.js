'use strict';

import React from 'react';

var data = [
  {
  "name": "Top Level",
  "parent": "null",
  "children": [
    {
      "name": "Level 2: A",
      "parent": "Top Level",
      "children": [
        {
          "name": "Level 3: Son of A",
          "parent": "Level 2: A"
        },
        {
          "name": "Level 3: Daughter of A",
          "parent": "Level 2: A"
        }
      ]
    },
    {
      "name": "Level 2: B",
      "parent": "Top Level",
      "children": [
        {
          "name": "Level 3: Child of B",
          "parent": "Level 2: B"
        }
      ]
    }
  ]
}
]

export default class Graph extends React.Component {

  render() {
    return (
      <div>
        <h1>Feed me pizza</h1>
      </div>
    )
  }
}
