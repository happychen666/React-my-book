import {fromJS} from 'immutable';
import {HANDLE_LOGIN,LOGOUT} from './actionTypes';

const defaultState = fromJS({
    loginStatus:false
})

export default (state = defaultState,action)=>{
    switch (action.type){
        case HANDLE_LOGIN:
            return state.set('loginStatus',action.loginStatus);
        case LOGOUT:
            return state.set('loginStatus',action.loginStatus);
    }
    return state;
}