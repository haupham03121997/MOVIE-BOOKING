import React, { Children } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd'
import CountDown from '../../../component/CountDown'
import Seat from './Seat'
import { GetTickerRoomAction } from '../../../redux/Action/getTickerRoom';
import Loading from '../../../component/Loading'
import './style.scss'
import { get } from 'lodash';
import { formatDateMoment } from '../../../common/function';

function BuyTicker(props: any) {

  const dispatch = useDispatch()
  const [end, setEnd] = React.useState<number>(new Date().getTime())
  const [isDelay, setIsDelay] = React.useState<boolean>(true)


  React.useEffect(() => {
    const maLichChieu = props.match.params.maLichChieu

    dispatch(GetTickerRoomAction(maLichChieu));

  }, [])

  const { tickerRooms } = useSelector((state: any) => state.GetTickerRoomsReducer)

  console.log('tikerRooms', tickerRooms);
  setTimeout(() => {
    setIsDelay(false)
  }, 3000)

  if (tickerRooms === null || isDelay) {
    return <Loading />
  }



  return (
    <section className="buy-ticker">
      <Row>
        <Col span='16'>
          <div className="title">
            <Row>
              <Col span='18' style={{ lineHeight: '70px', paddingLeft: '50px' }}>
                <div>

                  {`${'Chọn Ghế' + ' & ' + 'Thanh Toán'}`}
                </div>
              </Col>
              <Col span='6' style={{ lineHeight: '70px' }}>
                <div>Phạm Xuân Hậu</div>
              </Col>
            </Row>
          </div>
          <div className="book-chair">
            <Row>
              <Col span='2'>
                <img src={tickerRooms ? tickerRooms.thongTinPhim.hinhAnh : ''} />
              </Col>
              <Col span='22'>
                <div className="topContent">
                  <div className='topContent__left'>
                    <img src="/images/duong-ham-sinh-tu.png" alt="" />
                    <div>
                      {tickerRooms ? tickerRooms.thongTinPhim.tenCumRap : ''}
                      <div>
                        {tickerRooms ? tickerRooms.thongTinPhim.diaChi : ''}
                      </div>
                      <div style={{ color: '#9b9b9b' }}>
                        <span style={{ color: '#9b9b9b' }}>
                          {tickerRooms ? formatDateMoment(tickerRooms.thongTinPhim.ngayChieu, 'time', 'DD-MM') : ''}
                        </span>
                        <span className='mx-2' style={{ color: '#9b9b9b' }}>
                          :
                        </span>
                        <span style={{ color: '#9b9b9b' }}>
                          {tickerRooms ? tickerRooms.thongTinPhim.gioChieu : ''}
                        </span>
                        <span className='mx-2' style={{ color: '#9b9b9b' }}>
                          :
                        </span>
                        <span style={{ color: '#9b9b9b' }}>
                          {tickerRooms ? tickerRooms.thongTinPhim.tenRap : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="topContent__right">
                    <div>Thời gian giữ ghế</div>
                    <CountDown end={end + 304 * 1000} />
                  </div>
                </div>
                <div className="screen" style={{ margin: '0 auto' }}>
                  <img src="/images/screen.png" alt="" />
                </div>
                <div className="listSeat">
                  <div className="listSeat__Content">

                    <div className="seat-row">
                      <span>A</span>
                      {tickerRooms?.danhSachGhe.slice(0, 13).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>B</span>
                      {tickerRooms?.danhSachGhe.slice(13, 26).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>C</span>
                      {tickerRooms?.danhSachGhe.slice(26, 39).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>D</span>
                      {tickerRooms?.danhSachGhe.slice(39, 52).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>E</span>
                      {tickerRooms?.danhSachGhe.slice(53, 65).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="loi-di" >

                    </div>
                    <div className="seat-row">
                      <span>F</span>
                      {tickerRooms?.danhSachGhe.slice(65, 78).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>G</span>
                      {tickerRooms?.danhSachGhe.slice(78, 91).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>H</span>
                      {tickerRooms?.danhSachGhe.slice(91, 104).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>I</span>
                      {tickerRooms?.danhSachGhe.slice(104, 117).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>
                    <div className="seat-row">
                      <span>J</span>
                      {tickerRooms?.danhSachGhe.slice(117, 130).map((seat: any, index: number) => {
                        return (
                          <Seat key={index} seat={seat} />
                        )
                      })}
                    </div>


                    <div className="note">
                      <div className="chair-normal-note">

                      </div>
                      <div className="chair-vip-note">

                      </div>
                      <div className="chair-selected-note">

                      </div>
                      <div className="chair-booked-note">

                      </div>
                    </div>
                    <div className="note-text">
                      <div>
                        Ghế thường
                      </div>
                      <div className='ml-2'>
                        Ghế vip
                      </div>
                      <div className='ml-2'>
                        Ghế đang chọn
                      </div>
                      <div>
                        Ghế đã chọn
                      </div>
                    </div>
                  </div>


                </div>
              </Col>
            </Row>
          </div>
        </Col>

      </Row>
    </section>
  )
}

export default BuyTicker;