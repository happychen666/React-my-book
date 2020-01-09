import React from 'react';
import Loadable from 'react-loadable';//这里引入react是因为loading中返回的是一个jsx语法

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading:()=>{
        return (<div>加载中...</div>);
    },
});

export default () => <LoadableComponent/>;