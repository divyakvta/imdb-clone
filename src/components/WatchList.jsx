import React, { useEffect, useState } from "react";
import genre from "./utility/genre";

const WatchList = ({ watchList, setWatchList, removeFromWatchList }) => {
  const [search, setsearch] = useState("");
  const [genreList, setGenreList] = useState([""]);
  const [currentGenre, setCurrentGnere] = useState("All Genres");

  //Search
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };

  const handleClick = (genre) => {
    setCurrentGnere(genre);
  };

  //Sorting
  const sortAscending = () => {
    let ascendingWatchList = watchList.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchList([...ascendingWatchList]);
  };

  const sortDescending = () => {
    let descendingWatchList = watchList.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchList([...descendingWatchList]);
  };

  //Retrieving movie genres from watchlist to display the genres
  useEffect(() => {
    let genres = watchList.map((movie) => {
      return genre[movie.genre_ids[0]];
    });
    genres = new Set(genres);
    setGenreList(["All Genres", ...genres]);
    console.log(genres);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap my-4 gap-2">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(genre)}
              className={`flex justify-center items-center h-[2rem] w-[9rem] rounded-lg cursor-pointer ${
                currentGenre === genre ? "bg-blue-400" : "bg-gray-400"
              }`}
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center m-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[18rem] bg-gray-200 outline-none px-4 py-2"
        />
      </div>
      <div className=" rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 bg-gray-100">
            <tr>
              <th>Name</th>
              <th className="flex justify-center gap-1">
                <div onClick={sortAscending} className="cursor-pointer">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDescending} className="cursor-pointer">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          {watchList
            .filter((movie) => {
              if (currentGenre === "All Genres") {
                return true;
              } else {
                return genre[movie.genre_ids[0]] === currentGenre;
              }
            })
            .filter((movie) => {
              return movie.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
            })
            .map((movie, index) => (
              <tbody key={index}>
                <tr className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="w-[10rem] h-[6rem]"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                    <div className="mx-10">{movie.title}</div>
                  </td>
                  <td>{movie.vote_average.toFixed(1)}</td>
                  <td>{movie.popularity.toFixed(0)}</td>
                  <td>{genre[movie.genre_ids[0]]}</td>
                  <td
                    onClick={() => removeFromWatchList(movie)}
                    className="text-red-800 cursor-pointer"
                  >
                    delete
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default WatchList;
