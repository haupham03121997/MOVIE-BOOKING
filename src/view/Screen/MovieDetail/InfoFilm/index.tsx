import React from 'react';
import { MovieDetail } from '../../../../utils/interface'
import { Row, Col } from 'antd'
import { formatDateMoment } from '../../../../common/function';

interface Props {
  info: MovieDetail
}

export const InfoFilm: React.FC<Props> = ({ info }: Props) => {


  console.log('info', info);

  return (
    <div className="info-detail">
      <Row style={{ color: '£fff' }}>
        <Col span='6' style={{ color: '£fff' }}>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Ngày phát hành:</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Đạo diễn:</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Biên kịch:</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Thể loại: </div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Định dạng: </div>
        </Col>
        <Col span='6'>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>{formatDateMoment(info.ngayKhoiChieu, 'time', 'DD/MM/YYYY')}</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Json Clark</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Seth Macfarlen</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Comedy</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>2D/Digital</div>
        </Col>
        <Col span='12'>s
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>Nội dung</div>
          <div style={{ color: '#e9e9e9', fontWeight: 100, paddingTop: '10px' }}>
            {info.moTa}
          </div>
        </Col>
        <Row style={{ margin: '40px 0' }}>
          <Col span='24'>
            <div style={{ color: '#e9e9e9', fontWeight: 100, marginBottom: '30px' }}>Trailer phim</div>
          </Col>
          <Col span='24'>
            <iframe width="800px" height="400px"
              src={info.trailer}>
            </iframe>
          </Col>
        </Row>
      </Row>
    </div>
  )
}

