import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import './App.css';


function App() {

  const [movies, setMovies] = useState([])

  const API_URL = "https://api.themoviedb.org/3"

  const getMovies = async () => {

    const {data : {results}} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }

    });

    setMovies(results)
  }

  useEffect( () => {
    getMovies()
  },  []   )

  const renderMovies = () =>
    movies.map((item) => (
      <MovieCard
        key={item?.id}
        id={item?.id}
        name={item?.title || item?.original_title}
        releaseDate={item?.release_date}
        originalLang={item?.original_language}
        imageURL={item?.poster_path}
        imdbRating={item?.vote_average}
        genreId={item?.genre_ids}
        movie={item}
      />
    ));

  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="container">
        {renderMovies()}
      </div>
    </div>
  );
}

export default App;
