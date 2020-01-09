import {fromJS} from 'immutable';
import {CHANGE_DETAIL} from './actionTypes';

const defaultState = fromJS({
    title:'',
    content:''
});

export default (state=defaultState,action) => {
    switch (action.type){
        case CHANGE_DETAIL:
            return state.merge({
                title:fromJS(action.title),
                content:fromJS(action.content)
            });
    }
    return state;
}