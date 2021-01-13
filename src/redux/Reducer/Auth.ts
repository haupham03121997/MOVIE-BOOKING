
interface AuthLogin {
  loading : boolean ;
  isLogined : boolean;
  error : boolean
}

const initialState : AuthLogin={
  loading : false,
  isLogined : false,
  error  :false
} 

const AuthReducer = (state = initialState , action : any)=>{
  switch (action.type) {
    case "USER_LOGIN_REQUEST":{
      return {
        ...state , loading : true
      }
    }
    case "USER_LOGIN_SUCCESS" : {
      return {
        ...state , loading : false , isLogined : true,error : false
      }
    }      
    case "USER_LOGIN_FAILED":{
      return{
        ...state , loding : false , error : true
      }
    }
      
  
    default: return {
      ...state
    }

  }
}
export default  AuthReducer;