import {combineReducers} from 'redux';
import AuthLogin from './Reducer/Auth';
import {GetListMovieReducer} from './Reducer/getListMovie';
import {getAllCenimaSystemReducer} from './Reducer/getAllCinemaSystem'
import { GetMovieDetail } from './Reducer/getDetailMovie';

const rootReducer = combineReducers({
  AuthLogin,
  GetListMovieReducer,
  getAllCenimaSystemReducer,
  GetMovieDetail

})

export default rootReducer;