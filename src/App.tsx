import React from 'react';
import { UserRouter } from './component/UserRouter/UserRouter';
import { AuthRouter } from './component/UserRouter/AuthRouter';
import { PrivateRouter } from './component/UserRouter/UserRouter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = React.lazy(()=> import('./view/Admin/index'))
const Container = React.lazy(()=>import('./view/Screen/container'))
const Login = React.lazy(()=> import('./view/Screen/Auth/Login'))
const Register = React.lazy(()=> import('./view/Screen/Auth/Register'))
const NotFoundError = React.lazy(()=> import('./component/404-error-page'))
const MovieDetail = React.lazy(()=>import('./view/Screen/MovieDetail') )

function App() {
  // const size = useWindowSize();

  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Switch>
          <AuthRouter exact path='/login' component={Login} />
          <AuthRouter exact path='/register' component={Register} />
          <PrivateRouter exact path='/admin' component={Admin} />
          <UserRouter exact path='/' component={Container} />
          <UserRouter exact path='/movie/:name/:id' component={MovieDetail} />
          <Route component={NotFoundError} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;
