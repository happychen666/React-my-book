import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList:[]
})

export default (state=defaultState,action)=>{
    return state;
}