import { SEARCH_FOCUS, SEARCH_BLUR,CHANGE_LIST,MOUSE_ON,MOUSE_LEAVE,PAGE_CHANG } from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList = (data,len) => ({
    type:CHANGE_LIST,
    data,
    totalPage:Math.ceil(len/6)
})

export const searchFocus = () => ({
    type: SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const result = res.data.data;
            dispatch(changeList(fromJS(result),result.length))
        }).catch(e => {
            console.log(e);
        })
    }
}

export const onMouseEnter = () => ({
    type:MOUSE_ON
})

export const onMouseLeave = () => ({
    type:MOUSE_LEAVE
})

export const changePage = (page) => ({
    type:PAGE_CHANG,
    page
})