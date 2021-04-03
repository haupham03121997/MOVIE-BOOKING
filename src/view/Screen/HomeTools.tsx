
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDateMoment, _SortUniq, getLength } from '../../common/function';
import { getAllCinameHOmeTolAction, getAllCinemaDayAction } from '../../redux/Action/GetAllCinemaHomeTool';

function HomeTools() {

  const dispatch = useDispatch();
  const { listMovie } = useSelector((state: any) => state.GetListMovieReducer);
  const { listCinema } = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const { listDate } = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const [txtPhim, setTxtFilm] = useState<string>('');
  const [txtCinema, setTxtCinema] = useState<string>('');
  const [txtCenimaDate, seTxtCenimaDate] = useState<string>('');
  const [txtScreenings, setTxtScrennings] = useState<string>('');
  const [txtScreening, setTxtScrenning] = useState<string>('');
  const [isScreening, setIsScreening] = useState<boolean>(false);
  const [isChoose, setIsChoose] = useState({
    isFilm: false,
    isCenima: false,
    isCenimaDate: false,
    isScreening: false,
  });
  const ClickHomeTool = (type: string) => () => {
    if (type === 'isFilm') {
      setIsChoose(
        {
          isFilm: !isChoose.isFilm,
          isCenima: false,
          isCenimaDate: false,
          isScreening: false,
        }
      )
    }

    if (type === 'isCenima') {
      setIsChoose(
        {
          isFilm: false,
          isCenima: !isChoose.isCenima,
          isCenimaDate: false,
          isScreening: false,
        }
      )
    }

    if (type === 'isCenimaDate') {
      setIsChoose(
        {
          isFilm: false,
          isCenima: false,
          isCenimaDate: !isChoose.isCenimaDate,
          isScreening: false,
        }
      )
    }

    if (type === 'isScreening') {
      setIsChoose(
        {
          isFilm: false,
          isCenima: false,
          isCenimaDate: false,
          isScreening: !isChoose.isScreening,
        }
      )
    }
  }
  const selectedFilm = (maPhim: string, tenPhim: string) => {
    setTxtFilm(tenPhim);
    dispatch(getAllCinameHOmeTolAction(maPhim));
    setIsChoose({
      isFilm: false,
      isCenima: !isChoose.isCenima,
      isCenimaDate: false,
      isScreening: false,
    })}
  const selectedCinema = (maCumRap: string, tenCumRap: string)=> () => {
    // alert(1212)
    setTxtCinema(tenCumRap);
    dispatch(getAllCinemaDayAction(maCumRap));
  }
  const selectedCinemaDate = (date: string) => {
    seTxtCenimaDate(date);
    setTxtScrenning(date)
    setIsScreening(true)
  }
  const selectedScreening = (date: any) => {
    setTxtScrennings(date)
    setIsScreening(false)
  }
  let arrDataScreening = []
  const data = listDate.map((item: string) => {

    return item.substring(0, 10);

  })
  const arrDate = _SortUniq(data);

  if (getLength(txtScreening) > 0) {

    arrDataScreening = listDate.filter((item: string) => item.substring(0, 10) === txtScreening)

  }

  // console.log(isChoose.isCenima);



  return (
    <section className="section-hometools">
      <div className="section-hometools__content">
        <div className="section-hometools__content__movie">
          <div className="movie" onClick={ClickHomeTool('isFilm')}>
            {txtPhim ? <p>{txtPhim}</p> : 'Phim'}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isChoose.isFilm ? 'listMovie__show' : 'listMovie'} id="style-1">
            {listMovie && listMovie.map((film: any, index: any) => {
              return (
                <li key={index} className="listMovie__item" onClick={() => selectedFilm(film.maPhim, film.tenPhim)}>
                  {film.tenPhim}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="section-hometools__content__cinema" onClick={ClickHomeTool('isCenima')}>
          <div className="cinema">
            {txtCinema ? <p>{txtCinema}</p> : 'Rạp'}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isChoose.isCenima ? 'listCinema__show' : 'listCinema'}>
            {listCinema.length ?
              listCinema.map((cinema: any) => {
                return (
                  <li className="listCinema__system">
                    <a href="#rap">{cinema.tenHeThongRap}</a>
                    {cinema.cumRapChieu.map((item: any, index: number) => {
                      return (
                        <ul className="listCinema__system__show">
                          <li key={index} className="listCinema__system__show__item" onClick={selectedCinema(item.maCumRap, item.tenCumRap) }>
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
        <div className="section-hometools__content__day" onClick={ClickHomeTool('isCenimaDate')}>
          <div className="day">
            {txtCenimaDate ? <span className='pl-5 ml-2'>{formatDateMoment(txtCenimaDate, 'date', 'DD/MM')}</span> : 'Ngày xem'}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isChoose.isCenimaDate ? 'listMovieDate_show' : 'listMovieDate_hide'}>
            {getLength(arrDate) > 0 ?
              arrDate.map((item: any) => {
                return (
                  <li className="text-center p-2 listMovieDate_show__system" onClick={() => selectedCinemaDate(item)}>
                    {formatDateMoment(item, 'date', 'DD/MM')}
                  </li>
                )
              }) : <li className="listMovieDate_show__system p-2">
                Vui lòng chọn phim và rạp
              </li>}

          </ul>
        </div>
        <div className="section-hometools__content__day" onClick={ClickHomeTool('isScreening')}>
          <div className="day">
            {txtScreenings ? <span className='pl-5 ml-2'>{txtScreenings}</span> : 'Xuất chiếu'}
            <img src="/images/dropdown-icon.png" alt="" />
          </div>
          <ul className={isChoose.isScreening ? 'listMovieDate_show' : 'listMovieDate_hide'}>
            {
              getLength(arrDataScreening) > 0 ?
                arrDataScreening.map((item: any) => {
                  return (
                    <li className="text-center p-2 listMovieDate_show__system" onClick={() => selectedScreening(formatDateMoment(item, 'time', 'HH:mm'))}>
                      {formatDateMoment(item, 'time', 'HH:mm')}
                    </li>
                  )
                }) :
                <li className="listMovieDate_show__system p-2" >
                 Vui lòng chọn ngày xem
                </li>
            }
          </ul>
        </div>
        <div className="section-hometools__content__ticker">
          {txtScreenings ?   <button className="buy-ticker">Mua Vé Ngay</button>
            :   <button disabled={true} className="not-buy-ticker disabled">Mua Vé Ngay</button>  
          }
        
        </div>
      </div>
    </section>
  )
}

export default React.memo(HomeTools);