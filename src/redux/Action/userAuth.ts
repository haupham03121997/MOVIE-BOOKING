import apiServices from '../../apiServices/apiServices';
import axios from '../../utils/apiAxios';
import { Dispatch } from 'redux';
import * as TYPE from '../Constant/type';
export const userLogin = (values: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: TYPE.USER_LOGIN_REQUEST,
    });
    apiServices
      .Login(values)
      .then((response) => {
        dispatch({
          type: TYPE.USER_LOGIN_SUCCESS,
          payload: response.data,
        });
        localStorage.setItem('userLogin', JSON.stringify(response.data));
      })
      .catch((error) => {
        
        dispatch({
          type: TYPE.USER_LOGIN_FAILED,
          payload : error
        });
      });
  };
};

export const userRegister = (value : any)=>{
  return(dispatch : Dispatch)=>{
    dispatch({
      type : TYPE.USER_REGISTER_REQUEST
    })
    // apiServices.Register(value).then((res)=>{
    //   dispatch({
    //     type : TYPE.USER_REGISTER_SUCCESS,
    //   })
    // }).catch((error)=>{
    //   console.log("ERROR__" , error);
      
    //   dispatch({
    //     type : TYPE.USER_REGISTER_FAILED
    //   })
    // })
    axios.post('/api/QuanLyNguoiDung/DangKy' , value).then((res)=>{
      console.log('RES_ ' ,res);
      
    }).catch((err)=>{
      console.log('ERROR' , err);
      
    })

  }
}
