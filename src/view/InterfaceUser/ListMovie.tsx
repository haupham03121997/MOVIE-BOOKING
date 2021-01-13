
import React from 'react'
import {useDispatch} from 'react-redux';
import {getAllMovieAction}from '../../Action/getAllMovieAction'
export default function ListMovie() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(getAllMovieAction())
    //eslint-disable-next-line
  }, [dispatch])
  return (
    <React.Fragment></React.Fragment>    
  )
}
