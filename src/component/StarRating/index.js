import React from 'react'
import './style.scss'

const rederRating = (rating)=>{
  let arr

  if(rating >= 9 && rating <= 10){
    arr = [0, 1 ,2 ,3, 4]
  }else if(rating >= 7 && rating <= 8){
    arr = [0, 1 ,2 , 3]
  }
  else if(rating >= 4 && rating <= 6){
    arr = [0, 1 ,2]
  }else{
    arr = [0, 1 ]
  }

  return arr.map((it , index) => <img key={index} src="/images/star1.png" alt="star" />)
}


function StarRating({rating}) {
  return (
    <div className="avgPont">
      <p className="avgPont__min text-center">{rating}</p>
      <p className="avgPoint__icon mb-0">
        {rederRating(rating)}
        <img src="/images/star1.2.png" alt="star" />
      </p>
     
    </div>
  )
}

export default StarRating;
