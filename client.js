import React from 'react';
import { hydrate } from 'react-dom';
import App from './src/home/App';

hydrate(<App />, document.getElementById('app'));