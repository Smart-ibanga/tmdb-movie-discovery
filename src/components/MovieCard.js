import React from 'react'
import Favourite from './responsiveIcons/Favourite';

const MovieCard = ({
movie,
  id,
  name, 
  releaseDate, 
  originalLang, 
  imageURL,
  imdbRating,
  genreId

  }) => {
   
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  console.log(movie)
  return (
    <div className={"moviecard"}>
      <div className='cardPosition'>
        <div className='moviePosterSize'>
          {imageURL ? (
            <img
              className={"movie-cover"}
              src={`${IMAGE_PATH}${imageURL}`}
              alt="movieImage"
            />
          ) : null}
        </div>
        <div className='genre_and_favourite'>
          <p>TV SERIES</p>
          <Favourite />
        </div>
      </div>

      <div className={"movie-title"}>
        <span>{originalLang}</span>
        <span></span>
      </div>
      <div className={"movie-title"}>
        <span></span>
      </div>
      <div className={"movie-title"}>
        <span></span>
      </div>
      <div className={"movie-title"}>
        <span></span>
      </div>
    </div>
  );
}

export default MovieCard