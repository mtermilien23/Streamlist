import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onEdit, onDelete, onToggleWatched }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </div>
  );
};

export default MovieList;
