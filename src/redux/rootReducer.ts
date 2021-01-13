import {combineReducers} from 'redux';
import AuthLogin from './Reducer/Auth'
const rootReducer = combineReducers({
    AuthLogin,
})
export default rootReducer;