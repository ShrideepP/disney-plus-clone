import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Viewers from '../components/Viewers';
import MovieCarousel from '../components/MovieCarousel';
import axios from 'axios';

function Home() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=97205a949afcaa3638187a5d7a325084&language=en-US&page=1`)
      .then(response => {
        setPopularMovies(response.data.results);
      });

    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=97205a949afcaa3638187a5d7a325084&language=en-US&page=1`)
      .then(response => {
        setTopRatedMovies(response.data.results);
      });

    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=97205a949afcaa3638187a5d7a325084&language=en-US&page=1`)
      .then(response => {
        setUpcomingMovies(response.data.results);
      });

  }, []);

  return (
    <main className='w-full p-2 md:p-4 lg:p-6 space-y-4 font-montserrat overflow-x-hidden'>
      <Carousel />
      <Viewers />
      <MovieCarousel
        carouselText="Popular"
        movies={ popularMovies }
      />
      <MovieCarousel
        carouselText="Top Rated"
        movies={ topRatedMovies }
      />
      <MovieCarousel
        carouselText="Upcoming"
        movies={ upcomingMovies }
      />
    </main>
  );
};

export default Home;