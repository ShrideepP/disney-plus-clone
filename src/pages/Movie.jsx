import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCaretLeft } from "react-icons/ai";

function Movie() {

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=97205a949afcaa3638187a5d7a325084&language=en-US`)
    .then(response => {
      setMovie(response.data);
    });
  }, []);

  return (
    <section className='w-full min-h-[70vh] font-montserrat p-2 md:p-4 lg:p-6 md:flex justify-center items-center gap-6 text-white space-y-6'>
      <div className='md:w-2/4 md:flex justify-end'>
        <img className='custom-shadow rounded-lg w-full md:w-[unset] h-[50vh] md:h-[60vh] object-cover object-top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster" />
      </div>
      <div className='md:w-2/4 space-y-2 text-gray-400'>
        <button onClick={() => navigate('/home')} className="w-8 h-8 bg-gray-900 grid place-items-center text-white border border-gray-800">
          <AiOutlineCaretLeft className="text-sm" />
        </button>
        <h2 className='text-3xl font-bold text-white'>
          { movie.title }
        </h2>
        { movie.tagline && <strong className='block text-base font-semibold'>{ movie.tagline }</strong> }
        <p className='text-xs font-medium'>
          { movie.overview }
        </p>
        <div className='flex items-center gap-6'>
          <strong className='flex items-center gap-2'>
            <AiFillStar className='text-yellow-500 h-4 w-4' />
            <span className='text-xs font-medium'>
              { movie.vote_average ? movie.vote_average.toFixed(1) : 0 }
            </span>
          </strong>
          <strong className='block text-xs font-medium'>
            { `(${movie.vote_count}) votes` }
          </strong>
        </div>
        <strong className='block text-xs font-medium'>
          { `${movie.runtime} mins` }
        </strong>
        <strong className='block text-xs font-medium'>
          Release Date : { `${movie.release_date} `}
        </strong>
        <div className='flex gap-2 flex-wrap'>
          { movie.genres ? movie.genres.map(genre => {
              return (
                <strong key={genre.id} className='text-xs font-medium px-3 py-2 bg-gray-900 border border-gray-800 rounded-full text-white'>
                  {genre.name}
                </strong>
              )
            }) : null }
        </div>
      </div>
    </section>
  );
};

export default Movie;