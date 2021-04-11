import React from 'react';
import { UserRouter } from './component/UserRouter/UserRouter';
import { AuthRouter } from './component/UserRouter/AuthRouter';
import { PrivateRouter } from './component/UserRouter/UserRouter';
import { CheckoutRoter } from './component/UserRouter/UserRouter'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore'
import './scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './component/Loading'

require('dotenv').config()

const Admin = React.lazy(() => import('./view/Admin/index'))
const Container = React.lazy(() => import('./view/Screen/container'))
const Login = React.lazy(() => import('./view/Screen/Auth/Login'))
const Register = React.lazy(() => import('./view/Screen/Auth/Register'))
const NotFoundError = React.lazy(() => import('./component/404-error-page'))
const MovieDetail = React.lazy(() => import('./view/Screen/MovieDetail'))
const BuyTicket = React.lazy(() => import('./view/Screen/BuyTicker'))

function App() {
  // const size = useWindowSize();
  const firebaseConfig = {
    apiKey: 'AIzaSyCi6VkB77Q6S4vAQbTFO7dX0gKbinH3QN0',
    authDomain: 'bookingmovie-6e715.firebaseapp.com',
    projectId: 'bookingmovie-6e715',
    storageBucket: 'bookingmovie-6e715.appspot.com',
    messagingSenderId: '149483826083',
    appId: '1:149483826083:web:7d81e7b87fe098764d4816',
    measurementId: 'G-CQKGFJLHFP'
  }

  firebase.initializeApp(firebaseConfig)
  firebase.analytics();
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <CheckoutRoter exact path='/checkout/lich-chieu/:maLichChieu' component={BuyTicket} />
          <AuthRouter exact path='/login' component={Login} />
          <AuthRouter exact path='/register' component={Register} />
          <PrivateRouter exact path='/admin' component={Admin} />
          <UserRouter exact path='/' component={Container} />
          <UserRouter exact path='/movie/:name/:id' component={MovieDetail} />

          <Route component={NotFoundError} />
        </Switch>
      </BrowserRouter>
    </ React.Suspense>
  );
}

export default App;
