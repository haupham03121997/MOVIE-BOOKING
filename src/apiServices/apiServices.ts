import axiosClient from  '../utils/apiAxios';

class apiSevices {
  static Login =(value : object): Promise<any>=>{
      return axiosClient.post('/api/QuanLyNguoiDung/DangNhap' , value)
  };
  static Register = (value : object): Promise<any> =>{
    return axiosClient.post('/api/QuanLyNguoiDung/DangKy' , value)
  }
  static Cinema = () : Promise<any> =>{
    return axiosClient.get('/api/QuanLyRap/LayThongTinHeThongRap')
  };
  static CinemaHomeTool = (value : string) : Promise<any> =>{
    return axiosClient.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`)
  }
}
export default apiSevices;