import { combineReducers } from 'redux-immutable';//这个库将整个state也变成immutable对象，这样将state都变成immutable对象
import { reducer as headerReducer } from '../common/header/store';
import {reducer as homeReducer } from '../pages/home/store';
//所有的state数据
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer
});
export default reducer;
