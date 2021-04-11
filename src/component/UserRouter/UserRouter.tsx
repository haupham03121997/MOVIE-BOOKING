import React from 'react';
import { Route } from 'react-router-dom'
import DefaultTemplate from '../DefaultTemplate';
import { Redirect } from 'react-router-dom';

export const UserRouter = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest}
      render={
        routerProps => {
          return (
            <DefaultTemplate>
              <Component {...routerProps} />
            </DefaultTemplate>
          )
        }
      }

    />
  )

}

export const PrivateRouter = (props: any) => {
  const { component: Component, ...rest } = props;
  const userLogin = JSON.parse(localStorage.getItem('userLogin') || '{}');

  return (
    <Route  {...rest}
      render={
        routerProps => {
          return (
            userLogin.maLoaiNguoiDung === 'QuanTri' ? <Component {...routerProps} />
              : <Redirect to='/login' />
          )
        }
      }
    />
  )
}
export const CheckoutRoter = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route {...rest}
      render={
        routerProps => {
          return <Component {...routerProps} />
        }
      }
    />

  )
}