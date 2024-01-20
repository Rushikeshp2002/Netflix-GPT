/* eslint-disable react/prop-types */

import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='p-3 px-10 scrollbar-hide mb-2'>
         <h1 className='px-2 font-bold text-2xl py-6 text-white'>{title}</h1>
         <div className='flex w-[100%] overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
                {movies && movies.map((movie,index)=>  <MovieCard key={index} posterPath={movie.poster_path}/>)}

            </div>
        </div>
      
    </div>
  )
}

export default MovieList