export const GET_ALL_MOVIE_REQUEST = "GET_ALL_MOVIE_REQUEST";
export const GET_ALL_MOVIE_SUCCESS = "GET_ALL_MOVIE_SUCCESS";
export const GET_ALL_MOVIE_FAILED = "GET_ALL_MOVIE_FAILED";
interface ArrayListMovie  {
  maPhim: boolean;
  tenPhim:string;
  biDanh:string;
  trailer:string;
  hinhAnh:string;
  moTa:string;
  maNhom:string;
  ngayKhoiChieu:string;
  danhGia: boolean;
 }
interface GetAllRequest  {
 type : typeof GET_ALL_MOVIE_REQUEST,
}
interface GetAllSuccess {
  type : typeof GET_ALL_MOVIE_SUCCESS,
  payload : {
    data : ArrayListMovie[]
  }
 }
 interface GetAllFailed  {
  type : typeof GET_ALL_MOVIE_FAILED,
 }
 export type GetAllMovieDispatch = GetAllRequest | GetAllSuccess | GetAllFailed;