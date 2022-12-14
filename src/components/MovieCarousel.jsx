import React from 'react';
import MovieCard from './MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCarousel({ carouselText, movies }) {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
    ]
  };

  return (
    <section className='w-full p-2 md:p-4 lg:px-6'>
        <h2 className='text-2xl font-bold text-white mb-4'>{ carouselText }</h2>
        <Slider {...settings}>
            {
              movies.map(movie => <MovieCard key={ movie.id } movie={ movie } />)
            }
        </Slider>
    </section>
  );
};

export default MovieCarousel;