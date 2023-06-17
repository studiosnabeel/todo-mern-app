import React, { useState } from 'react';

const TodoForm = () => {
  const [text, setText] = useState('');
  const handleSubmit = () => {};
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Add tasks"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
