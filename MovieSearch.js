import React, { useState } from 'react';

const MovieSearch = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Avoid fetching if the search term is empty

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=ee194291e2803b50aeb37b6c6240105e&query=${encodeURIComponent(searchTerm)}'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }

      const data = await response.json();
      setMovies(data.results); // Assuming setMovies is a function to update the movies state
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
