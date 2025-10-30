import React, { use, useEffect } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const omdAPI_KEY = import.meta.env.VITE_omdAPI_KEY;

  const [movieName, setMovieName] = useState("");

  async function getMovieName() {
    const url = axios.get(
      `https://www.omdbapi.com/?s=${movieName}&apikey=${omdAPI_KEY}`
    );
    const response = await url;
    console.log(response.data);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="bg-yellow-300 h-12 flex items-start text-2xl font-bold text-gray-800">
          <Search />
          <input
            type="text"
            placeholder="Search Movie"
            name="search"
            className="placeholder:text-gray-500 placeholder:italic"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              getMovieName();
            }}
          >
            click to get hehe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
