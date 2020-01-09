import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const { loginStatus, handleLogin } = this.props;
        console.log(loginStatus);
        if (loginStatus) {
            return <Redirect to='/' />
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => { this.account = input }} />
                        <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => { this.props.handleLogin(this.account, this.password) }}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','loginStatus'])
})
const mapDispatchToProps = (dispatch) => ({
    handleLogin(accountEle, pwEle) {
        dispatch(actionCreators.handleLogin(accountEle.value, pwEle.value));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);