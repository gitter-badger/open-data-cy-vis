import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    React.createElement(App, {header: 'Open Data Cyprus'}),
    document.getElementById('content')
);