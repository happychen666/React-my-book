import { fromJS } from 'immutable';
import { CHANGE_HOME_DATA, GET_MORE_LIST,CHANGE_SCROLL_TOP } from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll:false,
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
        case CHANGE_SCROLL_TOP:
            return state.set('showScroll',action.show)
    }
    return state;
}