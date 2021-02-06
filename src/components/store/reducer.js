import * as actiontype from './action'

const initialState = {
    authData: null
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case actiontype.SET_AUTH: return { authData : action.data}
        default: return state;
    }
}

export default reducer