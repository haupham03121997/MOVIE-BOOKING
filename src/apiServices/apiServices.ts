
import axiosClient from  '../utils/apiAxios';

class apiSevices {
static Login =(value : any ): Promise<any>=>{
  return axiosClient.post('/api/QuanLyNguoiDung/DangNhap' , value)
};

  static Register = (value: any ): Promise<any> =>{
    return axiosClient.post('/api/QuanLyNguoiDung/DangKy' , value)
  }

  static Cinema = () : Promise<any> =>{
    return axiosClient.get('/api/QuanLyRap/LayThongTinHeThongRap')
  };

  static getInfoCinema = (id : string) : Promise<any> =>{
    return axiosClient.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}&maNhom=GP02`)
  }

  static getInfoShowTimeCinema = (maHeThongRap : string) : Promise<any> =>{
    return axiosClient.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`)
  }

  static getShowScheduleInfomation = ( maPhim : string ) : Promise<any> =>{
    return axiosClient.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }

  static CinemaHomeTool = (value : string) : Promise<any> =>{
    return axiosClient.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`)
  }


  static MovieDetail = ( id : string) : Promise<any>=>{
    return axiosClient.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
  }
}

export default apiSevices;