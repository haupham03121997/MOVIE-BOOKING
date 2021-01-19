import React from 'react'
import {Route } from 'react-router-dom';

export const  AuthRouter = (props : any)=> {
  const {component : Component , ...rest} = props;
  return (
    <Route {...rest}
      render ={
        routerProps =>{
          return(
            <div style={{ backgroundImage : "url('./images/bg2.jpg')" , height : "100vh"}}>
                <Component {...routerProps }/>
            </div>
          )
        }
      }
    />

  
  )
}
