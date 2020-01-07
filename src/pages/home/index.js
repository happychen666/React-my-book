import React, { PureComponent } from 'react';
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

class Home extends PureComponent {
    render() {
        const {topicList,showScroll} = this.props;
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
                {showScroll?<BackTop onClick={this.handleScrollTop}></BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
    handleScrollTop(e){
        window.scrollTo(0,0);
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state)=>({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.change_home_data());
    },
    changeScrollTopShow(){
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>200){
            dispatch(actionCreators.changeScrollTopShow(true))
        }else{
            dispatch(actionCreators.changeScrollTopShow(false))
        }
        
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);