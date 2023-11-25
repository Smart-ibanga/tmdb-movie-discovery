import React from 'react'

const MovieCard = ({movie}) => {
   
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  console.log(movie)
  return (
    <div className={"moviecard"}>
      {movie.poster_path ? (
        <img className={'movie-cover'} src={`${IMAGE_PATH}${movie.poster_path}`} alt="" />
      ) : null}
      <h5 className={'movie-title'}>{movie.title}</h5>
    </div>
  );
}

export default MovieCard