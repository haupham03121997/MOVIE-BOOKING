import React from 'react';
import {UserRouter} from './component/UserRouter/UserRouter';
import { BrowserRouter , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './view/InterfaceUser/container'
import './scss/style.scss'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserRouter path='/' component={Container} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
