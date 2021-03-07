import axios from '../../utils/apiAxios';
export const getAllMovieAction = ()=>{
  return(dispatch : any)=>{
    axios.get('/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04').then((res)=>{
      dispatch({
        type : "GET_ALL_MOVIE_SUCCESS", 
        payload : res.data
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
}
