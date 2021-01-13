import axios from '../../utils/apiAxios';
export const getAllMovieAction = ()=>{
  return(dispatch : any)=>{
    axios.get('api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01').then((res)=>{
      dispatch({
        type : "GET_ALL_MOVIE_SUCCESS", 
        payload : {
          data : res.data
        }
      })
    }).catch((err)=>{
      console.log(err);
      
    })
  }
}
