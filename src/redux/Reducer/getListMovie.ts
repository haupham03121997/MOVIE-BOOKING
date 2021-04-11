import {Movie} from '../../utils/interface'

interface InitialState {
  listMovie: Array<Movie>;
  loading : boolean;
  error : boolean;
}

const initialState :InitialState  = {
  listMovie : [],
  loading : false,
  error : false
}

export const GetListMovieReducer  = (state = initialState , action : any)=>{  

  switch (action.type) {
  case 'GET_ALL_MOVIE_REQUEST':{
    return {
      ...state,
    }
  }

  case 'GET_ALL_MOVIE_SUCCESS': {
    return{
      ...state , listMovie : action.payload , loading : false , error : false
    }
  }

  default:
    return{
      ...state
    }
  }
}
