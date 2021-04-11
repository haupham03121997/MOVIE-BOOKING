
import { GET_TICKER_ROOMS_SUCCESS } from '../Constant/type'

const innitialValue = {
  tickerRooms: null

}

export const GetTickerRoomsReducer = (state = innitialValue, action: any) => {
  switch (action.type) {
  case GET_TICKER_ROOMS_SUCCESS:
    return {
      ...state,
      tickerRooms: action.payload
    }

  default: return { ...state }
  }
}