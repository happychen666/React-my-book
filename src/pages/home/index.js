import React, { Component } from 'react';
import {connect} from 'react-redux';

import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import {actionCreators} from './store/';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends Component {
    render() {
        const {topicList} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://hbimg.huabanimg.com/b373264b8fd33a8e19ec2f2531c9dc7e258bc89d3dbd8-jh4trH_fw658" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <BackTop></BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
    }
}

// const mapStateToProps = (state)=>({
//     topicList: state.getIn(['home','topicList']),
//     articleList: state.getIn(['home','articleList']),
//     recommendList: state.getIn(['home','recommendList'])
// })

const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.change_home_data());
    }
})
export default connect(null,mapDispatchToProps)(Home);