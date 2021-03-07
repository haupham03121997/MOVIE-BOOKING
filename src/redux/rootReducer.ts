import {combineReducers} from 'redux';
import AuthLogin from './Reducer/Auth';
import {GetListMovieReducer} from './Reducer/getListMovie';
import {getAllCenimaSystemReducer} from './Reducer/getAllCinemaSystem'
const rootReducer = combineReducers({
    AuthLogin,
    GetListMovieReducer,
    getAllCenimaSystemReducer
})
export default rootReducer;