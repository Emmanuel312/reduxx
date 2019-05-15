import React from 'react';
import Routes from './src/routes'
import {StatusBar} from 'react-native'

const redux = () => 
{ 
    return (
        <>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <Routes />
        </>
    )
    
}
export default redux;
