import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style';
import { GlobalIcon } from './static/iconfont/iconfont.js'
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact  component={Detail}></Route>
          <GlobalStyled />
          <GlobalIcon />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
