import SearchIcon from "./search.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
const api_key = process.env.REACT_APP_API_KEY;

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=" + api_key;

function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [searched, setSearched] = useState(false);
  // const [title1, setTitle] = useState("");

  //to get info  from api
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setSearched(true);
    // setTitle(title);
    // document.title = title!=="" ? `${title} - Movies den` : "Movies den";
    {
      movies?.length<=0 ? (document.title =  "NO results - Movies Den" ) :( document.title = title!=="" ? `${title} - Movies den` : "Movies den") 
    }
    setmovies(data.Search);
  };

  //to
  useEffect(() => {
   
  }, []);

  return (
    <div className="app">
      <h1>Movies Den</h1>
      <div className="search">
        <input
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(e.target.value);
              searchMovies(searchTerm);
            }
          }}
        />

        <img
          src={SearchIcon}
          alt="search button"
          onClick={(e) => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie} />
          ))}
        </div>
      ) : searched ? (
        <div className="empty">
          <h2>NO movies found</h2>
        </div>
      ) : (
        <div className="empty">
          <h2>Search for movies</h2>
        </div>
      )}
    </div>
  );
}

export default App;
