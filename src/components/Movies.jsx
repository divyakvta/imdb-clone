import React, { useEffect, useState } from 'react'
import MovieCard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eb55322382f8d01698899a9f575b80db&language=en-US&page=2`)
    .then((res) => {
      setMovies(res.data.results)
    })
  },[])
  console.log(movies)


  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-5'>
      {movies.map((movie) => (
          <MovieCard poster_path={movie.poster_path} name={movie.original_title} />
        ))}
      </div>
    </div>
  )
}

export default Movies
