import apiServices from '../../apiServices/apiServices';
import { Dispatch } from 'redux';
import { GET_ALL_CENIMA_SYSTEM_SUCCESS, GET_ALL_INFO_CINEMA_SUCCESS, GET_ALL_SHOW_TIME_CINEMA_SUCCESS } from '../Constant/type';
export const getAllCinameAction = () => {
  return (dispatch: Dispatch) => {
    apiServices.Cinema().then((response) => { 
      dispatch({
        type: GET_ALL_CENIMA_SYSTEM_SUCCESS,
        payload : response.data
      });
    });
  };
};
export const getAllInfoCinemaAction = (id : string) =>{
  return(dispatch : Dispatch)=> {
    apiServices.getInfoCinema(id).then((response) => {
      dispatch({
        type : GET_ALL_INFO_CINEMA_SUCCESS,
        payload : response.data
      })
    })
  }
}
export const getAllShowTimeCinemaAction = (maHethongRap : string) =>{
  return(dispatch : Dispatch)=> {
    apiServices.getInfoShowTimeCinema(maHethongRap).then((response) => {
      dispatch({
        type : GET_ALL_SHOW_TIME_CINEMA_SUCCESS,
        payload : response.data
      })
    })
  }
}
