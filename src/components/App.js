
import {csv as requestCsv} from 'd3-request';
import {timeParse} from 'd3-time-format';
import React from 'react';

import './App.scss';
import Graph from './Graph';


const parseDate = timeParse('%e-%b-%y');

const App = React.createClass({
  getInitialState() {
    return {data: {}};
  },

  componentWillMount() {
    requestCsv('Awarded_CfTs_Jan-May 2016.csv', (err, data) => {
      if (err) {
        throw err;
      }
      this.setState({data: data.map(row => Object.assign({}, row, {
        AWARDDATE: parseDate(row.AWARDDATE),
        ['Date Published']: parseDate(row['Date Published'])
      }))});
    });
  },

  render() {
    return <Graph data={this.state.data}/>;
  }
});

export {App as default};
