import React, { useState } from "react";

const EditForm = ({ movie, onSave }) => {
  const [newTitle, setNewTitle] = useState(movie.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(movie.id, newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditForm;
