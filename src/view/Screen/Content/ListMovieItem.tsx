import React  from 'react'
import { Modal } from 'antd';
import StarRating from '../../../component/StarRating'
import './style.scss'
import { useHistory} from 'react-router-dom';
export const ListMovieItem : React.FC<any> = ({movie}) => {
  const history = useHistory()
  const [showModal, setShowModal] = React.useState<boolean>(false)
  const handleOk = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleRouter = ( name : string , id: number ) => () =>{
    return  history.push(`/movie/${name}/${id}`)
  }

  return (
    <>
      <img className="image-item" src={movie.hinhAnh} alt={movie.biDanh} />
      <div className="item-phim__container__detail mt-3">
        <div className="nameFilm">
          {movie.maPhim % 2 === 0 ?  <><span className="nameFilm-orange">C16</span>&nbsp; {movie.tenPhim}</>
            :  <><span className="nameFilm-green">C13</span>&nbsp; {movie.tenPhim}</>}
       
        </div>
        <div className="minFilm">
        94 Phút
        </div>
      </div>

      <div className="showHover">
        <button className="showHover__btn">MUA VÉ</button>
      </div>
      <div className="overlay" onClick={handleRouter(movie.tenPhim, movie.maPhim)}>
      </div>
      <div className="icon" onClick={()=> setShowModal(true)}>
        <i className="fa fa-play" />
      </div>
      <StarRating rating={movie.danhGia} />
      <Modal style={{ padding : 0}} width='800px'  visible={showModal} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <iframe  title="My Daily Marathon Tracker" style={{ height:'100%' , width:'100%' , border: 'none'}}  src={movie.trailer}>
        </iframe>

      </Modal>
    </>
  )
}