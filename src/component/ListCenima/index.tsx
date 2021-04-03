import React from 'react'
import { Row, Col, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCinameAction , getAllInfoCinemaAction, getAllShowTimeCinemaAction } from '../../redux/Action/getAllCinemaSystem'
import { getShowScheduleInfomation } from '../../redux/Action/getShowScheduleInfo'

function ListCenima(props : any) {
  const { Onchange  ,id} = props;
  const { TabPane } = Tabs;
  const { listCinemaSymtem} 
  = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCinameAction())
    // disppatch(getAllInfoCinemaAction('BHDStar'))
    // disppatch(getAllShowTimeCinemaAction('BHDStar'))
    dispatch(getShowScheduleInfomation(id))
  }
  
  , [])

  const handleChaneCinema = (id: string) => {
    // disppatch(getAllInfoCinemaAction(id))
    // disppatch(getAllShowTimeCinemaAction(id))
    Onchange(id)

  }
  const renderListCinema = (logo: string) => <img style={{ width: '50px', height: '50px', borderRadius: 50 }} src={logo} alt={logo} />

  return (
    <div className='section-cinema-address'>
      <Row justify="center">
        <Tabs defaultActiveKey='BHDStar' centered onChange={handleChaneCinema}>
          {listCinemaSymtem.map((item: any) => {

            return (
              <TabPane tab={renderListCinema(item.logo)} key={item.maHeThongRap} >
              </TabPane>
            )
          })}
        </Tabs>
      </Row>
    </div>
  )

}

export default ListCenima;