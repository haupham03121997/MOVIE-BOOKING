
import React  from 'react'
import ListMovie from './ListMovie'
import './style.scss'

export default function Content() {
  return (
    <div className="section-content mt-5">
      <div className="pt-5 "></div>
      <div className="section-content__body">
        <ListMovie />
      
      </div>
      <div className="back-news">
        <img src="" alt=""/>
      </div>
    </div>
  )
}
