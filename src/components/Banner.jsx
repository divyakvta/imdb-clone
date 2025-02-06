import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex justify-center items-end "
      style={{
        backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/2508946393/display_1500/stock-vector-happy-halloween-text-design-ghost-bat-flying-pumpkins-candle-moonnight-banner-design-on-dark-2508946393.jpg)`,
      }}
    >
      <div className="w-full bg-blue-900/60 text-center p-2 text-white text-2xl font-bold">
        <h1>Hallooween</h1>
      </div>
    </div>
  );
};

export default Banner;
