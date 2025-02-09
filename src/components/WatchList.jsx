import React, { useState } from "react";

const WatchList = ({ watchList }) => {
  const [search, setsearch] = useState("");

  const handleSearch = (e) => {
    setsearch(e.target.value)
  };

  return (
    <>
      <div className="flex justify-center my-4">
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          {watchList
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
                  <td>safa</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};

export default WatchList;
