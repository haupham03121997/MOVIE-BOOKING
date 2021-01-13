import {combineReducers} from 'redux';
import AuthLogin from './Reducer/Auth';
import GetAllMovieAction from './Reducer/getListMovie'
const rootReducer = combineReducers({
    AuthLogin,
    GetAllMovieAction,
})
export default rootReducer;