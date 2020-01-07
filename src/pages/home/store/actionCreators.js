import axios from 'axios';
import { CHANGE_HOME_DATA, GET_MORE_LIST } from './actionTypes';

const home_data = (topicList, articleList, recommendList) => ({
    type: CHANGE_HOME_DATA,
    topicList,
    articleList,
    recommendList,
})

export const change_home_data = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(home_data(result.topicList, result.articleList, result.recommendList));
        })
    }
}


const more_list = (list,nextPage) => ({
    type: GET_MORE_LIST,
    list,
    nextPage
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homelist.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(more_list(result, page+1));
        })
    }
}