import apiServices from '../../apiServices/apiServices';
import { Dispatch } from 'redux';
import { GET_ALL_CENIMA_HOMETOOL_SUCCESS, GET_ALL_CINEMA_DAY } from '../Constant/type';
export const getAllCinameHOmeTolAction = (value : string) => {
  return (dispatch: Dispatch) => {
    apiServices.CinemaHomeTool(value).then((response) => {         
      dispatch({
        type: GET_ALL_CENIMA_HOMETOOL_SUCCESS,
        payload : response.data.heThongRapChieu
      });
    });
  };
};

export const getAllCinemaDayAction = (value : string) =>{
  return(dispatch : Dispatch) =>{
   
    dispatch({
      type :GET_ALL_CINEMA_DAY,
      payload : value
    });
  };
};
