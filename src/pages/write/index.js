import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        console.log(loginStatus)
        if(loginStatus){
            return (
                <div style={{margin:'50px auto',width:'300px',textAlign:'center',fontSize:24}}>已经登录，可以写文章了</div>
            )
        }else{
            return <Redirect to='/login'/>
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login','loginStatus'])
})
const mapDispatchToProps = (dispatch) => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(Write);