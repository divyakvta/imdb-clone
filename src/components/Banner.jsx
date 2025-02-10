import React from "react";

const Banner = ({banner_img, title}) => {
  return (
    <div
      className="h-[20vh] md:h-[70vh] bg-cover bg-top md:bg-center flex justify-center items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner_img})`,
      }}
    >
      <div className="w-full bg-blue-900/60 text-center p-2 text-white text-2xl font-bold">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
