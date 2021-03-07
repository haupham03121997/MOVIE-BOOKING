import apiServices from "../../apiServices/apiServices";
import { Dispatch } from "redux";
import { GET_ALL_CENIMA_SYSTEM_SUCCESS } from "../Constant/type";
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
