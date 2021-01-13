import React from 'react';
import {Route} from 'react-router-dom'
import DefaultTemplate from '../DefaultTemplate';

export const UserRouter = (props : any) =>{
  const {component : Component, ...rest} = props;
  return(
    <Route {...rest} 
      render = {
        routerProps =>{
          return(
            <DefaultTemplate>
              <Component {...routerProps}/>
            </DefaultTemplate>
          )
        }
      }
      
    />
  )

}