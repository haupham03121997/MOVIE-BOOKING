import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieAction } from '../../../redux/Action/getAllMovieAction';
import { Movie } from '../../../utils/interface';
import ListMovieItem from './ListMovieItem';
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
    nav: true,
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


  return (

    <Slider {...settings}>
      {listMovie && listMovie.map((movie: Movie) => {
        return (

          <div className="item-phim__container">
            <div className="item-phim__container__content">
              <ListMovieItem tenPhim={movie.tenPhim} hinhAnh={movie.hinhAnh} biDanh={movie.biDanh} />
            </div>
          </div>
        )
      })}
    </Slider>

  )
}
