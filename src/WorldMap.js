import React from 'react';
import './App.css';
import { geoMercator, geoPath } from 'd3-geo';

export default function WorldMap({ data, colourScale, size }) {
  const projection = geoMercator()
    .scale(120)
    .translate([430, 250]);

  const pathGenerator = geoPath().projection(projection);

  const countries = data.map((d, i) => (
    <path
      key={'path' + i}
      d={pathGenerator(d)}
      style={{
        fill: colourScale(d.launchDay),
        stroke: 'black',
        strokeOpacity: 0.5,
      }}
      className="countries"
    />
  ));

  return (
    <svg width={size[0]} height={size[1]}>
      {countries}
    </svg>
  );
}
