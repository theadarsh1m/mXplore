import React, { useEffect } from "react";
import MovieCard from "./Cards/MovieCard";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [trendingMovies, setTrendingMovies] = useState([]);
  let timeWindow = "week"; //day or week

  useEffect(() => {
    async function getTrendingMovieName() {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${TMDB_API_KEY}&page=1`
      );

      setTrendingMovies(movie.data.results);
      console.log(movie.data.results);
    }
    getTrendingMovieName();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-6">
      {trendingMovies.map(
        (trendingMovie) => (
          (trendingMovie.poster_path = `https://image.tmdb.org/t/p/original${trendingMovie.poster_path}`),
          (
            <MovieCard key={trendingMovie.id} movie={trendingMovie}></MovieCard>
          )
        )
      )}
    </div>
  );
};

export default Home;
