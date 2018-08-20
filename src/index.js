import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import defaultTheme from './style/theme-default'


import App from './containers/app';
import Routes from './routes';
import Store from './store'

import './style/main.css';



ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={defaultTheme}>
            <Routes />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
