//immutable库保证state对象被误修改
import { fromJS } from 'immutable';
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ON, MOUSE_LEAVE,PAGE_CHANG } from './actionTypes';

//defaultState是一个immutalbe对象，list也是一个immutalbe对象
const defaultState = fromJS({
    focused: false,
    mouseIn:false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            //的set方法会结合之前immutable对象的值以及设置的新值，返回一个全新的immutable对象
            return state.set('focused', true);
        case SEARCH_BLUR:
            return state.set('focused', false);
        case CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case MOUSE_ON:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case PAGE_CHANG:
            return state.set('page', action.page);
    }
    return state;
}