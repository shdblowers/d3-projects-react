import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
import WorldMap from './WorldMap';
import worldData from './world';
import { range } from 'd3-array';
import { scaleThreshold } from 'd3-scale';
import { geoCentroid } from 'd3-geo';

const appData = worldData.features
  .filter(d => geoCentroid(d)[0] < -20)
  .map((d, i) => {
    const offset = Math.random();
    d.launchDay = i;
    d.data = range(30).map((p, q) => (q < i ? 0 : Math.random() * 2 + offset));

    return d;
  });

const colourScale = scaleThreshold()
  .domain([5, 10, 20, 30])
  .range(['#75739F', '#5EAFC6', '#41A368', '#93C464']);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>d3-projects-react dashboard</h2>
        </div>
        <div>
          <WorldMap
            colourScale={colourScale}
            data={appData}
            size={[500, 400]}
          />
          <BarChart
            colourScale={colourScale}
            data={appData}
            size={[500, 400]}
          />
        </div>
      </div>
    );
  }
}

export default App;
