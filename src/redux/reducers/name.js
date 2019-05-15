import {TYPE} from '../actions/types'

initialState = 
{
    name: ''
}

const reducer = (state = initialState,action) =>
{
    switch(action.type)
    {
        case TYPE :
            return {
                ...state,
                name: action.payload.name
            }
        default :
            return state
    }
}
export default reducer