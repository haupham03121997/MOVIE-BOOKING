
import {combineReducers} from 'redux';
import AuthLogin from './Reducer/Auth';
import {GetListMovieReducer} from './Reducer/getListMovie';
import {getAllCenimaSystemReducer} from './Reducer/getAllCinemaSystem'
import { GetMovieDetail } from './Reducer/getDetailMovie';
import {  GetScheduleReducer}  from './Reducer/getShowScheduleInfo';
import {GetTickerRoomsReducer} from './Reducer/getTickerRoomReducer'

const rootReducer = combineReducers({
  AuthLogin,
  GetListMovieReducer,
  getAllCenimaSystemReducer,
  GetMovieDetail,
  GetScheduleReducer,
  GetTickerRoomsReducer



})

export default rootReducer;