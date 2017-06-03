import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './App';
import {configureStore} from './configureStore';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);