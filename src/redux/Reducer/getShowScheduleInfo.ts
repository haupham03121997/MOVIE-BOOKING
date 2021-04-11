
import { GET_SHOW_SHEDULE_INFO_SUCCESS } from '../Constant/type'

const innitialValue = {
  listSchedule: null

}

export const GetScheduleReducer = (state = innitialValue, action: any) => {
  switch (action.type) {
  case GET_SHOW_SHEDULE_INFO_SUCCESS:
    return {
      ...state,
      listSchedule: action.payload
    }

  default: return { ...state }
  }
}