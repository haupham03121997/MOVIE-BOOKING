import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieAction } from '../../../redux/Action/getAllMovieAction';
import { Movie } from '../../../utils/interface';
import { ListMovieItem } from './ListMovieItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from '../../../component/Loading'

function ListMovie() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getAllMovieAction())
  }, [])



  const { listMovie, loading } = useSelector((state: any) => state.GetListMovieReducer);



  if (loading) {
    return <Loading />
  }

  const settings = {
    infinite: true,
    nav: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
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
      {listMovie && listMovie.map((movie: Movie, index: number) => {
        return (
          <div className="item-phim__container" key={index}>
            <div className="item-phim__container__content">
              <ListMovieItem movie={movie} />
            </div>
          </div>
        )
      })}
    </Slider>

  )
}

export default React.memo(ListMovie)