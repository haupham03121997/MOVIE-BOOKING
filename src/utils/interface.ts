export interface Movie  {
  maPhim: number;
  tenPhim:string;
  biDanh:string;
  trailer:string;
  hinhAnh:string;
  moTa:string;
  maNhom:string;
  ngayKhoiChieu:string;
  danhGia: number;
 }

export interface lichChieuPhim {
  giaVe: number;
  maLichChieu: string;
  maRap: string;
  ngayChieuGioChieu: string;
  tenRap: string;
  thoiLuong: number;
}

export interface textDivHomeTool {
   txtFilm : string;
   txtCinema: string;
   txtDate: string;
   txtScreenings: string;
 }
export interface ReSize {
  width: string,
  height: string
}

export interface MovieDetail {
  lichChieu : Array<any>,
  maPhim : number,
  tenPhim : string,
  biDanh : string,
  trailer :string,
  hinhAnh: string,
  moTa : string,
  maNhom : string,
  ngayKhoiChieu: string,
  danhGia : number
}