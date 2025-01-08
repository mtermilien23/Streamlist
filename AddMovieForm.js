import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [movieTitle, setMovieTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieTitle.trim()) {
      onAddMovie(movieTitle);
      setMovieTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
