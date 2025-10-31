import React, { use, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import MovieCard from "./Cards/MovieCard";
import TextField from "@mui/material/TextField";

const Navbar = () => {
  const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [movieName, setMovieName] = useState("");
  const [results, setResults] = useState([]);

  async function getMovieName() {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movieName}&page=1`
    );

    setResults(movie.data.results);
    console.log(movie.data.results);

    console.log(movie.data);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="bg-yellow-300 h-12 flex items-start text-2xl font-bold text-gray-800 pt-1">
          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            placeholder="Search Movie"
            name="search"
            className="placeholder:text-gray-500 placeholder:italic flex-1 bg-transparent outline-none"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          <button
            className="bg-gray-800 text-white px-4 py-1 rounded-3xl hover:bg-gray-700 flex items-center gap-2"
            onClick={() => {
              getMovieName();
            }}
          >
            <Search />
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-center mt-6">
        {results.map(
          (movie) => (
            (movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`),
            (<MovieCard key={movie.id} movie={movie} />)
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
