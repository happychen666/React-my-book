import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, GET_MORE_LIST } from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage:1
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            });
        case GET_MORE_LIST:
            return state.merge({
                articleList:state.get('articleList').concat(fromJS(action.list)),
                articlePage:action.nextPage
            })
    }
    return state;
}