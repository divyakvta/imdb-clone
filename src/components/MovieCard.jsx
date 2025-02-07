import React from 'react'

const MovieCard = ({poster_path, name}) => {
  
  return (
    <div className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-lg hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className=' absolute bottom-1 text-white text-xl w-full text-center bg-gray-900/60'>
        {name}
      </div>
    </div>
  )
}

export default MovieCard
