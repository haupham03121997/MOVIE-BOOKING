import React from 'react'
import Carousel from './Carousel';
import ListMovie from './ListMovie';
import HomeTools from './HomeTools';
import ReactNotification from 'react-notifications-component'
 function container() {
  return (
    <div>
       <Carousel />
       <HomeTools />
       <ListMovie />
       <ReactNotification />
    </div>
  )
}
export default container;