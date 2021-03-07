import React , {useState} from 'react'

interface Props  {
  hinhAnh : string;
  biDanh : string ;
  tenPhim : string;
}

export default function ListMovieItem(props : Props) {
  const {hinhAnh , biDanh , tenPhim } = props;
  const hanldeModal = () => {
    setIsModal(!isModal)
  }
  const [isModal, setIsModal] = useState<boolean>(false);
  const CloseModal = (e: React.MouseEvent) => {
    console.log("E______", e);

  }
  return (
    <>
    <img className="image-item" src={hinhAnh} alt={biDanh} />
    <div className="item-phim__container__detail mt-2">
      <div className="nameFilm">
        <span className="nameFilm-orange">C16</span>&nbsp; {tenPhim}
      </div>
      <div className="minFilm">
        94 Phút
     </div>
    </div>

    <div className="showHover">
      <button className="showHover__btn">MUA VÉ</button>
    </div>
    <div className="overlay">
    </div>
    <div className="icon"  >
      <i className="fa fa-play" />
    </div>
    <div className="avgPont">
      <p className="avgPont__min text-center">5.3</p>
      <div className="avgPoint__icon mb-0">
        <img src="/images/star1.png" alt="star" />
        <img src="/images/star1.png" alt="star" />
        <img src="/images/star1.png" alt="star" />
        <img src="/images/star1.png" alt="star" />
        <img src="/images/star1.2.png" alt="star" />
      </div>
    </div>
    </>
  )
}
