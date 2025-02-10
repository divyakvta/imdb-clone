import React, { useEffect, useState } from "react";
import MovieCard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";
import Banner from "./Banner";

const Movies = ({ watchList, addToWatchList, removeFromWatchList }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  //Pagination Previous
  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  //Pagination naxt
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  //Fetching data from API
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=eb55322382f8d01698899a9f575b80db&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  console.log(movies);

  return (
    <div>
      <Banner banner_img={movies[0]?.backdrop_path} title={movies[0]?.title}/>
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            poster_path={movie.poster_path}
            name={movie.original_title}
            movieObj={movie}
            watchList={watchList}
            addToWatchList={addToWatchList}
            removeFromWatchList={removeFromWatchList}
          />
        ))}
      </div>
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Movies;
