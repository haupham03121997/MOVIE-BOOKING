import apiServices from '../../apiServices/apiServices';
import { Dispatch } from 'redux';
import { GET_SHOW_SHEDULE_INFO_SUCCESS } from '../Constant/type';
export const getShowScheduleInfomation = (id : string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_SHOW_SHEDULE_INFO_SUCCESS
    })
    apiServices.getShowScheduleInfomation(id).then((response) => { 
      console.log('RES__', response);
      
      dispatch({
        type: GET_SHOW_SHEDULE_INFO_SUCCESS,
        payload : response.data
      });
    });
  };
};