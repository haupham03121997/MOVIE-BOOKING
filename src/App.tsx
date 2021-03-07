import React from 'react';
import { UserRouter} from './component/UserRouter/UserRouter';
import {AuthRouter} from './component/UserRouter/AuthRouter';
import {PrivateRouter} from './component/UserRouter/UserRouter';
import Admin from './view/Admin/index';
import { BrowserRouter, Switch } from 'react-router-dom';
import Container from './view/InterfaceUser/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './view/InterfaceUser/Auth/Login';
import Register from './view/InterfaceUser/Auth/Register';
import './scss/style.scss'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRouter path='/login' component={Login} />
        <AuthRouter path='/register' component={Register} />
        <PrivateRouter path='/admin' component={Admin} />
        <UserRouter path='/' component={Container} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
