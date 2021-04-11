import { GET_DETAIL_MOVIE_REQUEST, GET_DETAIL_MOVIE_SUCCESS, GET_DETAIL_MOVIE_FAILED } from '../Constant/type'

const innitialState = {
  loading: false,
  movieDetail: null,
  error: false,
}

export const GetMovieDetail = (state = innitialState, action: any) => {
  switch (action.type) {
  case GET_DETAIL_MOVIE_REQUEST:
    return {
      ...state, loading: true,
    }
  case GET_DETAIL_MOVIE_SUCCESS:
    return {
      ...state, movieDetail: action.payload, loading: false, error: false
    }
  case GET_DETAIL_MOVIE_FAILED:
    return {
      ...state, error: true,
    }

  default:
    // eslint-disable-next-line indent
      return {
      ...state
    }
  }
}