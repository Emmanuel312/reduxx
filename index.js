import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import storeConfig from './src/redux/config'
import React from 'react'


const store = storeConfig()

const redux = () => (
        <Provider store={store}>
            <App />
        </Provider>
) 

AppRegistry.registerComponent(appName, () => redux);
