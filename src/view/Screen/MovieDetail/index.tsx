import React from 'react';
import './style.scss'
import { getDetailMovie } from '../../../redux/Action/getDetailMovie'
import get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Tabs } from 'antd'
import ListCenima from '../../../component/ListCenima'
import { InfoFilm } from './InfoFilm';
import { formatDateMoment } from '../../../common/function';
import Loading from '../../../component/Loading'

const { TabPane } = Tabs;
const MovieDetail: React.FC = (props: any) => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    const id = get(props, 'match.params.id', '')

    dispatch(getDetailMovie(id))
  }, [])

  const { movieDetail, loading } = useSelector((state: any) => state.GetMovieDetail)

  console.log(123123);

  if (loading) {
    return <Loading />
  }

  return (
    <section className="movie-detail" >
      <div className="style-blur">
        <img src={movieDetail ? movieDetail.hinhAnh : ''} alt={movieDetail ? movieDetail.biDanh : ''} />
      </div>
      <div className="style-layer">

      </div>

      <div className="movie-detail__top">
        <Row>
          <Col span="6" >
            <img src={movieDetail ? movieDetail.hinhAnh : ''} alt={movieDetail ? movieDetail.biDanh : ''} />
          </Col>
          <Col span='18'>
            <div className="movie-detail__title">
              <div className="movie-detail__title--release">
                {movieDetail && formatDateMoment(movieDetail.ngayKhoiChieu, 'time', 'DD/MM/YYYY')}
              </div>
              <div className="movie-detail__title--name">
                <span className="nameFilm-orange">C16</span> {movieDetail && movieDetail.tenPhim}
              </div>

              <div className="movie-detail__title__time">
                100 phút - 6.9 IMDb - 2D/Digital
              </div>
              <button>
                Mua vé
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="movie-detail__bottom">
        <Tabs defaultActiveKey='1' centered>
          <TabPane tab="Lịch chiếu" key='1'>
            <ListCenima movieDetail={movieDetail} id={get(props, 'match.params.id', '')} />
          </TabPane>
          <TabPane tab='Thông tin' key='2'>
            <InfoFilm info={movieDetail} />
          </TabPane>
          <TabPane tab='Đánh giá' key='3'>

          </TabPane>
        </Tabs>

      </div>



    </section>

  )

}

export default MovieDetail;