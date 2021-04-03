import {
  GET_ALL_CENIMA_HOMETOOL_SUCCESS,
  GET_ALL_CINEMA_DAY,
  GET_ALL_CENIMA_SYSTEM_SUCCESS,
  GET_ALL_INFO_CINEMA_SUCCESS,
  GET_ALL_SHOW_TIME_CINEMA_SUCCESS
} from '../Constant/type';

// import { lichChieuPhim } from '../../utils/interface'
const initialState = {
  listCinema: [],
  listDate: [],
  listCinemaSymtem : [],
  listInfoCinemaSystem : [],
  listShowtimeCenimaSytem : []
};


export const getAllCenimaSystemReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
  case GET_ALL_CENIMA_HOMETOOL_SUCCESS:
    return {
      ...state,
      listCinema: action.payload,
    };

  case GET_ALL_CINEMA_DAY:{
    const newData = [...state.listCinema];
    const data: Array<any> = [];

    newData.map((movie: any) => {
      return movie.cumRapChieu
        .find((giochieu: any) => giochieu.maCumRap === action.payload)
        ?.lichChieuPhim?.map((lichChieuPhim: any) =>
          data.push(lichChieuPhim.ngayChieuGioChieu)
        );
    });
    return {
      ...state,
      listDate: data,
    };
  }

  case GET_ALL_CENIMA_SYSTEM_SUCCESS: {
    return {
      ...state,
      listCinemaSymtem : action.payload
    }
  }

  case GET_ALL_INFO_CINEMA_SUCCESS : {
    return {
      ...state,
      listInfoCinemaSystem : action.payload
    }
  }
  
  case GET_ALL_SHOW_TIME_CINEMA_SUCCESS: {
    return {
      ...state,
      listShowtimeCenimaSytem: action.payload
    }
  }

  default:
    return { ...state };
  }
};
