import React from 'react'
import { Row, Col, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCinameAction, getAllInfoCinemaAction, getAllShowTimeCinemaAction } from '../../redux/Action/getAllCinemaSystem'
import { getShowScheduleInfomation } from '../../redux/Action/getShowScheduleInfo'
import { get, set } from 'lodash';
import ItemRap from './ItemRap'
import ShowTimeInfo from './ShowTimeInfo'
import './style.scss'

function ListCenima(props: any) {
  const { Onchange, id } = props;
  const { TabPane } = Tabs;
  const dispatch = useDispatch()
  const [maCumrap, setMaCumRap] = React.useState<string>('BHDStar')
  const [cumRap, setCumRap] = React.useState<string>('')
  const { listCinemaSymtem, listInfoCinemaSystem, listShowtimeCenimaSytem }

    = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const handleChaneCinema = (id: string) => {
    dispatch(getAllInfoCinemaAction(id))
    dispatch(getAllShowTimeCinemaAction(id))
    setMaCumRap(id)
  }

  React.useEffect(() => {
    dispatch(getAllCinameAction())
    dispatch(getAllInfoCinemaAction('BHDStar'))
    dispatch(getAllShowTimeCinemaAction('BHDStar'))
    dispatch(getShowScheduleInfomation(id))
  }, [])

  const { listSchedule } = useSelector((state: any) => state.GetScheduleReducer)
  let setHeThongRap: Array<any> = []
  let setShowTime: Array<any> = []

  if (listSchedule !== null) {
    setHeThongRap = listSchedule.heThongRapChieu.filter((it: any) => it.maHeThongRap === maCumrap)
  }


  let maRap: string = ''


  if (setHeThongRap.length >= 1) {
    maRap = setHeThongRap[0].cumRapChieu[0].maCumRap
  }

  const onchange = (maCumRap: string) => {
    setCumRap(maCumRap)
    setCumRap(maCumRap)
  }
  const renderListCinema = (logo: string) => <img style={{ width: '50px', height: '50px', borderRadius: 50 }} src={logo} alt={logo} />
  const style = {
    background: { backgroundColor: 'white' },
    borderLeft: {
      borderBottomLeftRadius: '4px',
      backgroundColor: 'white'
    },
    borderRight: {
      borderTopRightRadius: '4px',
      backgroundColor: 'white'
    }
  }


  return (
    <div className='section-cinema-address-detail'>
      <Row justify="center">
        <Tabs defaultActiveKey='BHDStar' centered onChange={handleChaneCinema}>
          {listCinemaSymtem.map((item: any) => {
            return (
              <TabPane tab={renderListCinema(item.logo)} key={item.maHeThongRap} >
                {setHeThongRap.length >= 1 ? <Row >
                  <Col md={8} style={style.background}>
                    <ItemRap item={setHeThongRap} onChange={onchange} id={Number(id)} />
                  </Col>
                  <Col md={16} style={style.background}>
                    <ShowTimeInfo item={setHeThongRap} maRap={maRap} cumRap={cumRap} listSchedule={listSchedule} />
                  </Col>
                </Row> : <Row justify='center'>
                  <Col span='8' style={style.borderLeft}>

                  </Col>
                  <Col span='8' style={style.background}>
                    <img src='/images/emptyresult.jpg' />
                  </Col>
                  <Col span='8' style={style.borderRight}>

                  </Col>
                </Row>}

              </TabPane>
            )
          })}
        </Tabs>
      </Row>
    </div>
  )

}

export default ListCenima;