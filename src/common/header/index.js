import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { toJS } from 'immutable';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';

class Header extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const { loginStatus, focused, list, logout, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <Link to='/'><NavItem className="left active">首页</NavItem></Link>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    {loginStatus ?
                        <NavItem className="right logout" onClick={logout}>退出</NavItem> :
                        <Link to='/login'> <NavItem className="right" >登录</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(list) }}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont pen' : 'iconfont pen'}>&#xe62d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'> <Button className="writing"><i className="iconfont">&#xe678;</i>写文章</Button></Link>
                    {
                        loginStatus ? '' : <Button className="reg">注册</Button>
                    }
                </Addition>
            </HeaderWrapper>
        )
    }
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
        if (list.size !== 0) {
            const listJS = list.toJS();
            const listShow = [];
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                listShow.push(listJS[i]);
            };
            if (mouseIn || focused) {
                return (
                    <SearchInfo
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => { handlePageChange(page, totalPage, this.spinIcon) }}><i className="iconfont pin" ref={(icon) => { this.spinIcon = icon }}>&#xe851;</i>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {
                                listShow.map((item) => {
                                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                })
                            }
                        </SearchInfoList>
                    </SearchInfo>
                )
            } else {
                return null;
            }
        }
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        mouseIn: state.get('header').get('mouseIn'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size == 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.onMouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.onMouseLeave())
        },
        handlePageChange(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                page++;
            } else {
                page = 1;
            }
            dispatch(actionCreators.changePage(page))
        },
        logout() {
            dispatch(loginActionCreators.logout());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);