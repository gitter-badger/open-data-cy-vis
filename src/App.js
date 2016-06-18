'use strict';

import React from 'react';
import _ from 'lodash';

import styles from './App.scss';

let App = React.createClass({
    getInitialState: function() {
        return {
        };
    },

    render: function() {
        return (
            <div className='App'>
                <h1>{this.props.header}</h1>
            </div>
        );
    }
});

module.exports = App;