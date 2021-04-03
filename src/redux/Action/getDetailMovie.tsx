import apiServices from '../../apiServices/apiServices';
import { Dispatch } from 'redux';
import { GET_DETAIL_MOVIE_REQUEST , GET_DETAIL_MOVIE_SUCCESS , GET_DETAIL_MOVIE_FAILED } from '../Constant/type';
export const getDetailMovie = (id : string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_DETAIL_MOVIE_REQUEST
    })
    apiServices.MovieDetail(id).then((response) => { 
      dispatch({
        type: GET_DETAIL_MOVIE_SUCCESS,
        payload : response.data
      });
    });
  };
};