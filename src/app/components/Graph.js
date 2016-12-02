'use strict';

import React from 'react';
import * as d3 from 'd3';


export default class Graph extends React.Component {

  render() {

    let width = 960,
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

        console.log(circles);
    return (
      <svg width={width} height={height}>
        {circles.map((d,i) =>
            <circle key={i} fill={color(i)} />
          )
        })
      </svg>
    )
  }
}


// <circle d={circles} cx={function(d) { return d.x; }} cy={function(d) { return d.y; }} r="20"></circle>
