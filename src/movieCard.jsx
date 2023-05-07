//for react components jsx is preferable, but not much diff in jsx and js

import React from "react";

const MovieCard = ({movie1}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie1.Year}</p>
      </div>

      <div>
        <img
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://via.placeholder.400"
          }
          alt={movie1.title}
        />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};


export default MovieCard