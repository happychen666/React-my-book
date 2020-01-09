import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style';
import { GlobalIcon } from './static/iconfont/iconfont.js';
import Login from './pages/login';
import Detail from './pages/detail/loadable';
import Header from './common/header';
import Home from './pages/home';
import Write from './pages/write';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          {/* 此时loadbale这个组件可以获取路由信息，因为它直接挂在Route这个组件上的 */}
          <Route path='/detail/:id' exact  component={Detail}></Route>
          <Route path='/write' exact component={Write}></Route>
          <GlobalStyled />
          <GlobalIcon />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
