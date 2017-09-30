import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './base.css';
import './index.css';

import App from './app.js';

let data=[
    {
        id:'1',
        title:'今天',
        isSelect:false

    },
    {
        id:'2',
        title:'天气不错',
        isSelect:true

    }
];


ReactDOM.render(
        <App list={data}/>,
    document.getElementById('root')
);
registerServiceWorker();
