import React from 'react';
import { UserRouter} from './component/UserRouter/UserRouter';
import {AuthRouter} from './component/UserRouter/AuthRouter';
import { BrowserRouter, Switch } from 'react-router-dom';
import Container from './view/InterfaceUser/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './view/InterfaceUser/Login';
import './scss/style.scss'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <AuthRouter path='/login' component={Login} />
        <UserRouter path='/' component={Container} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
