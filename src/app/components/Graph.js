'use strict';

import React from 'react';
import * as d3 from 'd3';


export default class Graph extends React.Component {

  render() {
    var svg = d3.select("svg"),
    width = 960,
    height = 400,
    radius = 32;

    var circles = d3.range(20).map(function() {
      return {
        x: Math.round(Math.random() * (width - radius * 2) + radius),
        y: Math.round(Math.random() * (height - radius * 2) + radius)
      };
    });

    var color = d3.scaleOrdinal()
        .range(d3.schemeCategory20);

    return (
      <svg width="960" height="400">

      </svg>
    )
  }
}
