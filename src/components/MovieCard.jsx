import React from "react";

const MovieCard = ({
  poster_path,
  name,
  watchList,
  addToWatchList,
  movieObj,
  removeFromWatchList,
}) => {
  
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
  }

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-lg hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? ( 
        <div className=" flex justify-center m-2 absolute right-1 h-8 w-8 items-center rounded-lg bg-gray-900/60"
        onClick={() => removeFromWatchList(movieObj)}>&#10060;</div>
      ) : (
        <div
          onClick={() => addToWatchList(movieObj)}
          className=" flex justify-center m-2 absolute right-1 h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className=" absolute bottom-1 text-white text-xl w-full text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
