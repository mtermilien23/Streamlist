import React, { useState } from 'react';

function StreamList() {
  const [streamItem, setStreamItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Added Item:', streamItem);
    setStreamItem('');
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={streamItem}
          onChange={(e) => setStreamItem(e.target.value)}
          placeholder="Enter a movie or program"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add</button>
      </form>
    </div>
  );
}

const containerStyle = { textAlign: 'center', marginTop: '2rem' };
const formStyle = { display: 'inline-block' };
const inputStyle = { padding: '0.5rem', marginRight: '0.5rem', width: '200px' };
const buttonStyle = { padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none' };

export default StreamList;
