import {
  GET_ALL_CENIMA_HOMETOOL_SUCCESS,
  GET_ALL_CINEMA_DAY,
} from "../Constant/type";
const initialState = {
  listCinema: [],
  listDate: [],
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
    case GET_ALL_CINEMA_DAY:
      const newData = [...state.listCinema];
      console.log("NEW_DATA", action.payload);
      console.log("NEW_DATA", newData);
      //  const hihi =  newData.map((rapchieu: any) => {
      //     return rapchieu.cumRapChieu?.find((item : any) => item.maCumRap === action.payload)
      //     ?.lichChieuPhim?.map((rap : any) => rap.ngayChieuGioChieu.substring(0, 10));
      //     if (lichChieuTheoRap) {
      //       const lichChieuTheoRapSet = [new Set(lichChieuTheoRap)];
      //         lichChieuTheoRapSet.map(day => console.log("day " , day));
      //     }
      //   });

      const rapChieu = newData.map((movie: any) => {
        const gioChieuPhim= movie.cumRapChieu.find(
          (giochieu: any) => giochieu.maCumRap === action.payload
        )?.lichChieuPhim?.map((rap : any ) => rap.ngayChieuGioChieu);
        return gioChieuPhim;
      });

    
      console.log("RAPCHIEU__" , rapChieu);
      

      return {
        ...state,
        listDate: newData,
      };

    default:
      return { ...state };
  }
};
