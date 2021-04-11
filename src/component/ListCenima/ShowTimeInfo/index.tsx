import React from 'react'
import { Tabs } from 'antd';
import { useHistory } from 'react-router-dom'
import { formatDateMoment, _SortUniq } from '../../../common/function';

function ShowTimeInfo(props: any) {
  const { item, cumRap, maRap, listSchedule } = props;
  const histtory = useHistory();
  const [chooseDay, setChooseDay] = React.useState<string>('')
  const { TabPane } = Tabs;
  let arrCumRapChieu;
  let ngayChieu: Array<string> = []
  let gioChieu: Array<string> = []

  // Khi moi load page se lay gia tri mac dinh la maRap tu component parent
  if (item.length >= 1 && cumRap === '') {
    arrCumRapChieu = item[0].cumRapChieu.filter((item: any) => item.maCumRap === maRap)
    ngayChieu = _SortUniq(arrCumRapChieu[0]?.lichChieuPhim.map((it: any) => it.ngayChieuGioChieu.substring(0, 10)))

    if (chooseDay) {
      gioChieu = arrCumRapChieu[0].lichChieuPhim.filter((it: any) => it.ngayChieuGioChieu.substring(0, 10) === chooseDay)
    } else {

      gioChieu = arrCumRapChieu[0].lichChieuPhim.filter((it: any) => it.ngayChieuGioChieu.substring(0, 10) === ngayChieu[0])

    }

  }

  //Khi chon rap khac thi se load theo cum rap
  if (item.length >= 1 && cumRap !== '' && chooseDay !== '') {
    arrCumRapChieu = item[0].cumRapChieu.filter((item: any) => item.maCumRap === cumRap)

    if (arrCumRapChieu.length >= 1) {
      ngayChieu = _SortUniq(arrCumRapChieu[0].lichChieuPhim.map((it: any) => it.ngayChieuGioChieu.substring(0, 10)))

    }

    gioChieu = arrCumRapChieu[0].lichChieuPhim.filter((it: any) => it.ngayChieuGioChieu.substring(0, 10) === ngayChieu[0])
  }

  // hàm này để sử chọn ngày trong tuần để xem phim
  const callback = (key: string) => {
    setChooseDay(key)
  }
  const handleRouter = (maLichChieu: string) => () => {
    // chuyển tới trang buyticker để mua vé theo mã lich chiếu
    histtory.push(`/checkout/lich-chieu/${maLichChieu}`)

  }
  const renderArrShowTime = (item: Array<string>) =>
    item.map((it: any, index) =>
      <span key={index} className='show-time-movie' onClick={handleRouter(it.maLichChieu)}>
        {formatDateMoment(it.ngayChieuGioChieu, 'time', 'LT')}
      </span>
    )
  const renderArrDay = (item: any) => {
    return (
      <li className="CGV__movieInfo__item px-4">
        <div className="d-flex mt-2">
          <img
            src={item.hinhAnh}
          />
          <div className="movieInfo__detail  ml-2">
            <p className="mb-0">
              <span className="movie-green mr-2">P</span>{item.tenPhim}
            </p>
            <p className='my-2'>94 phút - TIX 8.9 - IMDb 0</p>
          </div>

        </div>
        <p >2D Digital</p>
        <div className="show-time">
          {renderArrShowTime(gioChieu)}
        </div>
      </li>
    )
  }

  return (
    <ul id="style-3" className="CGV__movieInfo scrollbar">
      <Tabs defaultActiveKey="1" onChange={callback}>
        {ngayChieu.map((item, index) => {
          return (
            <TabPane tab={formatDateMoment(item, 'time', 'DD/MM')} key={item}>
              {listSchedule !== null ? renderArrDay(listSchedule) : ''}
            </TabPane>
          )

        })}
      </Tabs>
    </ul>
  )

}

export default ShowTimeInfo;
