import {TYPE} from './types'


export const action = (name) =>
{
    return {
        type: TYPE,
        payload: name 
    }
}
