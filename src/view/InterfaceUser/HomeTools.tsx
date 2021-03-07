
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCinameHOmeTolAction, getAllCinemaDayAction } from '../../redux/Action/GetAllCinemaHomeTool';
import moment from 'moment';
function HomeTools() {

  const dispatch = useDispatch();
  const { listMovie } = useSelector((state: any) => state.GetListMovieReducer);
  const { listCinema } = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const { listDate } = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const [isFilm, setIsFilm] = useState<boolean>(false);
  const [isCenima, setIsCenima] = useState<boolean>(false);
  const [txtPhim, setTxtFilm] = useState<string>("");
  const [txtCinema, setTxtCinema] = useState<string>("");
  const [current , setCurrent] =  useState<string>("");

  const selectedFilm = (maPhim: string, tenPhim: string) => {
    const idFilm = maPhim;
    const nameFilm = tenPhim;
    setTxtFilm(nameFilm);
    setIsFilm(!isFilm);
    setIsCenima(true);
    dispatch(getAllCinameHOmeTolAction(idFilm));
  }

  const handleCemima = () => {
    setIsCenima(!isCenima);
    setIsFilm(false);
  }

  const selectedCinema = (maCumRap: string, tenCumRap: string) => {
    setIsCenima(false);
    setTxtCinema(tenCumRap);
    dispatch(getAllCinemaDayAction(maCumRap));
    setCurrent(maCumRap);
  }

  return (
    <section className="section-hometools">
      <div className="section-hometools__content">
        <div className="section-hometools__content__movie">
          <div className="movie" onClick={() => { setIsFilm(!isFilm) }}>
            {txtPhim ? <p>{txtPhim}</p> : "Phim"}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isFilm ? "listMovie__show" : "listMovie"} id="style-1">
            {listMovie && listMovie.map((film: any, index: any) => {
              return (
                <li key={index} className="listMovie__item" onClick={() => selectedFilm(film.maPhim, film.tenPhim)}>
                  {film.tenPhim}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="section-hometools__content__cinema" onClick={handleCemima}>
          <div className="cinema">
            {txtCinema ? <p>{txtCinema}</p> : "Rạp"}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isCenima ? "listCinema__show" : "listCinema"}>
            {listCinema.length ?
              listCinema.map((cinema: any) => {
                return (
                  <li className="listCinema__system">
                    <a href="#rap">{cinema.tenHeThongRap}</a>
                    {cinema.cumRapChieu.map((item: any) => {
                      return (
                        <ul className="listCinema__system__show">
                          <li className="listCinema__system__show__item" onClick={() => { selectedCinema(item.maCumRap, item.tenCumRap) }}>
                            {item.tenCumRap}
                          </li>
                        </ul>
                      )
                    })}
                  </li>
                )
              }) : <li className="listCinema__system p-2">
                Vui lòng chọn phim
            </li>}


          </ul>
        </div>
        <div className="section-hometools__content__day">
          <div className="day">
            Ngày xem
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className="listDay_show">
            {/* {listDate.length ?
              listDate.map((rapChieu: any) => {

                const lichChieuTheoRap = rapChieu.cumRapChieu?.find((item : any) => item.maCumRap === current)
                ?.lichChieuPhim?.map((rap :any) => rap.ngayChieuGioChieu.substring(0, 10));
                if (lichChieuTheoRap) {
                  const lichChieuTheoRapSet = [new Set(lichChieuTheoRap)];
                   lichChieuTheoRapSet.map((ngay, index) => {
                      return(
                        <li>
                          Ngayf : {ngay}
                        </li>
                      ) 
                   }
                   
                  )
                }
              }
                
              )
              : ""} */}
          </ul>
        </div>
        <div className="section-hometools__content__screenings">
          <div className="screenings">
            Suất chiếu
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
        </div>
        <div className="section-hometools__content__ticker">

        </div>
        {/* <p>{moment("2019-01-01T20:10:00").format("DD/MM/YYYY")}</p> */}
      </div>
    </section>
  )
}
export default HomeTools;