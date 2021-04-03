import React from 'react';
import './style.scss'
import apiServices from '../../../apiServices/apiServices';
import { getDetailMovie } from '../../../redux/Action/getDetailMovie'
import get from 'lodash/get'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Tabs } from 'antd'
import ListCenima from '../../../component/ListCenima'

const { TabPane } = Tabs;
const MovieDetail: React.FC = (props: any) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const id = get(props, 'match.params.id', '')

    dispatch(getDetailMovie(id))
  }, [])

  const { movieDetail, loading } = useSelector((state: any) => state.GetMovieDetail)
  const Onchange = (value : string)=>{
    console.log('Value',value);
    
  }


  return (
    <section className="movie-detail" >
      <div className="style-blur">
        <img src="https://picsum.photos/200/300" alt="2" />
      </div>
      <div className="style-layer">

      </div>
 
      <div className="movie-detail__top">
        <Row>
          <Col span="6" >
            <img style={{ height: '100%' }} src="https://picsum.photos/200" alt="1" />
          </Col>
          <Col span='18'>
            <div className="movie-detail__title">
              <div className="movie-detail__title--release">
                26.03.2021
              </div>
              <div className="movie-detail__title--name">
                <span className="nameFilm-orange">C16</span> Godzilla vs. Kong
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
        {/* <Row>
          <Col span='24'>
            <Tabs>
              <TabPane tab="tab 1" key="1">
              Content of Tab Pane 1
              </TabPane>
              <TabPane tab="tab 2" key="2">
              Content of Tab Pane 2
              </TabPane>
              <TabPane tab="tab 3" key="3">
              Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row> */}
        <ListCenima Onchange={Onchange} id={ get(props, 'match.params.id', '')} />
      </div>



    </section>

  )

}

export default MovieDetail;