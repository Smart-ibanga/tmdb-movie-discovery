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

  const renderMovies = () =>(
      movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}   
          />
          
         ))

  )

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
