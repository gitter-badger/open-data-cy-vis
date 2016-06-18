
import React from 'react';

import './Graph.scss';


const Graph = React.createClass({
  componentWillMount() {
  },

  render() {
    return (
      <svg className='the-graph'>
        <g>
        </g>
      </svg>
    );
  }
});

export {Graph as default};
