import {createStore, combineReducers} from 'redux'
import nameReducer from './reducers/name'

const reducers = combineReducers(
{
    names : nameReducer
})

const storeConfig = () =>
{
    return createStore(reducers)
}

export default storeConfig
