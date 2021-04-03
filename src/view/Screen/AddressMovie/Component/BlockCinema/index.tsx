import React from 'react'
import { Menu, Dropdown, Button, Space } from 'antd';
import { formatDateMoment, _SortUniq } from '../../../../../common/function'
import get from 'lodash/get'

function RapAddressInfo(props: any) {
  const { item } = props
  const renderArrShowTime = (item: any) => {
    const sortListTime = item.map((it: any) => {
      return it.ngayChieuGioChieu
    })
    let date 
    let data

    if(sortListTime.length > 4 ) {
      data = sortListTime.filter((it: any) => it.substring(0, 10) === '2019-01-02')
    }else{
      data = sortListTime
    }


    return data.map((item: any) => {
      return (
        <div className="mb-2 mr-3">
          <span>{formatDateMoment(item, 'time', 'HH:mm')}</span>
        </div>

      )
    })
  }
  const renderFilm = () => {
    return item.map((item: any, index: number) => {
      return (
        <li className="CGV__movieInfo__item px-5">
          <div className="d-flex mt-2">
            <img
              src={item.hinhAnh}
            />
            <div className="movieInfo__detail mt-3 ml-2">
              <p className="mb-0">
                <span className="movie-green mr-2">P</span>{item.tenPhim}
              </p>
              <p>94 phút - TIX 8.9 - IMDb 0</p>
            </div>
           
          </div>
          <p >2D Digital</p>
          <div className="show-time">
            {renderArrShowTime(item.lstLichChieuTheoPhim)}
          </div>
        </li>
      )
    })
  }

  return (
    <ul id="style-3" className="CGV__movieInfo scrollbar">
      {/* {item.length ? renderFilm() : 'Không có thông tin.'} */}
    </ul>
  )
}

export default React.memo(RapAddressInfo);
