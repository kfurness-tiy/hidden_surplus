'use strict';

import React from 'react';
import * as d3 from 'd3';


export default class Graph extends React.Component {

  render() {
    let data = this.props.data;

    let width = 960,
        height = 400,
        radius = 32;

    var circles = d3.range(data.length);

    var color = d3.scaleOrdinal()
        .range(d3.schemeCategory20);

        console.log(circles);
        console.log("test", data);
    

    return (
      <svg width={width} height={height}>
        {circles.map((d,i) =>
            <circle key={i} fill={color(i)} cx={Math.round(Math.random() * (width - radius * 2) + radius)} cy={Math.round(Math.random() * (height - radius * 2) + radius)} r={radius} />
          )
        }
      </svg>
    );
  }
}
