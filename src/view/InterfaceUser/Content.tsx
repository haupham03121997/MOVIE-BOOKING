
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieAction } from '../../redux/Action/getAllMovieAction';
import { Movie } from '../../utils/interface';
import ModalTrailer from '../../component/ModalTrailer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ListMovie() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllMovieAction())
    //eslint-disable-next-line
  }, [dispatch])
  const { listMovie } = useSelector((state: any) => state.GetListMovieReducer);
  var settings = {
    infinite: true,
    nav : true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const hanldeModal = () => {
    setIsModal(!isModal)
  }
  const [isModal, setIsModal] = useState<boolean>(false);
  const CloseModal = (e: React.MouseEvent) => {
    console.log("E______", e);

  }
  return (
    <div className="section-content mt-5">
      <div className="pt-5 "></div>
      <div className="section-content__body">
        <Slider {...settings}>

          {listMovie && listMovie.map((movie: Movie, index : any ) => {
            return (
              <div className="item-phim__container" key={index}>
                <div className="item-phim__container__content">
                  <img className="image-item" src={movie.hinhAnh} alt={movie.biDanh} />
                  <div className="item-phim__container__detail mt-2">
                    <div className="nameFilm">
                      <span className="nameFilm-orange">C16</span>&nbsp; {movie.tenPhim}
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
                  <div className="icon" onClick={hanldeModal} >
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
                </div>
              </div>
            )
          })}

        </Slider>
      </div>
    </div>
  )
}
