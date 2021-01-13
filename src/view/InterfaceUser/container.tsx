import React from 'react'
import Carousel from './Carousel';
import ListMovie from './ListMovie';
import HomeTools from './HomeTools';
 function container() {
  return (
    <div>
       <Carousel />
       <ListMovie />
       <HomeTools />
    </div>
  )
}
export default container;