import apiServices from '../../apiServices/apiServices';
import { Dispatch } from 'redux';
import { GET_TICKER_ROOMS_SUCCESS } from '../Constant/type';
export const GetTickerRoomAction = (idShowTimes : string) => {
  return (dispatch : Dispatch) => {
    // dispatch({
    //   type: GET_SHOW_SHEDULE_INFO_SUCCESS
    // })
    apiServices.GetTickerRoom(idShowTimes).then((response) => { 
      console.log('response', response);
      
      dispatch({
        type: GET_TICKER_ROOMS_SUCCESS,
        payload : response.data
      });
    });
  };
};