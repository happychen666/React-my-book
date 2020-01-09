import {HANDLE_LOGIN,LOGOUT} from './actionTypes';
import axios from 'axios';

const changeLogin = (result)=>({
    type:HANDLE_LOGIN,
    loginStatus:result
})

export const handleLogin = (account,password)=>{
    return (dispatch) => {
        //用get模拟数据，事件项目中应该用post请求
        axios.get(`/api/login.json?account=${account}&password=${password}`).then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin(result));
            }else{
                alert('登录失败');
            }
        })
    }
}

export const logout = ()=>({
    type:LOGOUT,
    loginStatus:false
})