import React from 'react'
import Carousel from './Carousel';
import Content from './Content/Content';
import HomeTools from './HomeTools';
import ReactNotification from 'react-notifications-component'
 function container() {
  return (
    <div>
       <Carousel />
       <HomeTools />
       <Content />
       <ReactNotification />
    </div>
  )
}
export default container;