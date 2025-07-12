import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black text-white">
      <div className=" -mt-52 pl-12 relative z-11 ">
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.populerMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRated} />
        <MovieList title={"Upcoming movies"} movies={movies?.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
