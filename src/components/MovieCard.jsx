import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function MovieCard({ movie }) {

  const [genre, setGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=97205a949afcaa3638187a5d7a325084&language=en-US")
      .then(response => {
        const movieGenre = response.data.genres.filter(genre => {
          return genre.id === movie.genre_ids[0] || genre.id === movie.genre_ids[1] || genre.id === movie.genre_ids[2]
        });
        setGenre(movieGenre);
      });
  }, []);

  return (
    <>
      {
        isLoading
        ?
        <div className='movie-card h-56 rounded-lg mx-1 md:mx-2 hover:scale-110 custom-shadow'>
          <SkeletonTheme baseColor='#131B2A' highlightColor='#202D46'>
            <Skeleton height={224} duration={2} />
          </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`}>
          <div className='movie-card mx-1 h-56 custom-shadow relative rounded-lg overflow-hidden flex items-end z-10 lg:hover:scale-[1.20] hover:z-50'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" className='w-full h-full -z-10 absolute top-0 left-0 object-cover brightness-75' />
            <div className='movie-content p-2 text-white z-50'>
              <h3 className='text-base font-semibold'>
                { movie.title }
              </h3>
              <strong className='flex items-center gap-1'>
                <AiFillStar className='text-lg text-yellow-500' />
                <span className='font-medium text-xs'>
                  { movie.vote_average.toFixed(1) }
                </span>
              </strong>
              <div className='flex gap-1 my-1 flex-wrap'>
                {
                  genre.map(genre => {
                    return (
                      <span key={ genre.id } className='block px-2 py-1 text-[10px] font-medium bg-gray-800 rounded-full'>{ genre.name }</span>
                    );
                  })
                }
              </div>
              <p className='text-[10px] font-medium'>
                { movie.overview.slice(0, 60) + '...' }
              </p>
            </div>
          </div>
        </Link>
      }
    </>
  );
};

export default MovieCard;