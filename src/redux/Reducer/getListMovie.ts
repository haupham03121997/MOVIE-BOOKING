
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
interface InitialState {
  listMovie: Array<ArrayListMovie>;
  loading : boolean;
  error : boolean;
}
const initialState :InitialState  = {
  listMovie : [],
  loading : false,
  error : false
}

const GetListMovieReducer = (state = initialState , action : any)=>{
  console.log("action" , action);
  
    switch (action.type) {
      case "GET_MOVIE_SUCCESS": {
        return{
          ...state , listMovie : action.payload.data  , loading : false , error : false
        }
      }
      default:
       return{
         ...state
       }
    }
}
export default GetListMovieReducer;