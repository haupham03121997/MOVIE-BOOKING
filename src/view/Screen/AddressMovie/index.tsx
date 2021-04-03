import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllCinameAction , getAllInfoCinemaAction, getAllShowTimeCinemaAction } from '../../../redux/Action/getAllCinemaSystem'
import ItemRap from './Component/ItemRap'
import RapAddressInfo from './Component/BlockCinema'
import { Row, Col, Tabs } from 'antd';
import { _SortUniq } from '../../../common/function';
import get from 'lodash/get';
import './style.scss';

function AddressMovie() {
  const { TabPane } = Tabs;
  const disppatch = useDispatch();
  const [maCumrap , setMaCumRap] = React.useState<string>()
  const { listCinemaSymtem, listInfoCinemaSystem , listShowtimeCenimaSytem } 
  = useSelector((state: any) => state.getAllCenimaSystemReducer);
  const handleChaneCinema = (id: string) => {
    disppatch(getAllInfoCinemaAction(id))
    disppatch(getAllShowTimeCinemaAction(id))

  }




  React.useEffect(() => {

    disppatch(getAllCinameAction())
    disppatch(getAllInfoCinemaAction('BHDStar'))
    disppatch(getAllShowTimeCinemaAction('BHDStar'))
  

  }
  , [])





  let arrShowTime
  let infoFilm : Array<any> = []
  const onchange = React.useCallback((value : string)=>  setMaCumRap(value) , [maCumrap] )

  if(maCumrap){
    const lstShow = get(listShowtimeCenimaSytem ,'[0].lstCumRap', [] )

    arrShowTime = lstShow.find((it : any) => it.maCumRap === maCumrap ) 
  }

  if(arrShowTime !== undefined){
    const dsFilm = get(arrShowTime , 'danhSachPhim',  [])

    infoFilm = dsFilm
  }

  const renderListCinema = (logo: string) => <img style={{ width: '50px', height: '50px', borderRadius: 50, boxShadow: '0px 0px 12px #eee' }} src={logo} alt={logo} />

  return (
    <div className='section-cinema-address'>
      <Row justify="center">
        <Tabs defaultActiveKey='BHDStar' centered onChange={handleChaneCinema}>
          {listCinemaSymtem.map((item: any) => {

            return (
              <TabPane tab={renderListCinema(item.logo)} key={item.maHeThongRap} >
                <Row>
                  <Col md={8}>
                    <ItemRap item={listInfoCinemaSystem} onChange={onchange}  />
                  </Col>
                  <Col md={16}>
                    <RapAddressInfo item={infoFilm}/>
                  </Col>
                </Row>
              </TabPane>
            )
          })}
        </Tabs>
      </Row>
    </div>
  )
}

  

export default React.memo(AddressMovie)
