import axios from '../utils/apiAxios';

export const getAllMovieAction = ()=>{
  return(dispatch : any)=>{
    axios.get('api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01').then((res)=>{
      dispatch({
        type : "GET_MOVIE_SUCCESS", 
      })
      console.log("res" ,res);
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }
}
