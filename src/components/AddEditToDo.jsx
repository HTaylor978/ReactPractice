import React, { useState } from 'react';
import '../App.css';

const AddEditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo ? todo.getDescription() : '');
  const [completed, setCompleted] = useState(todo ? todo.getCompleted() : false);
  const [date, setDate] = useState(todo ? todo.getDate() : '');

  return (
    <div className="todo-form-container">
      <h2>{todo ? 'Edit To Do' : 'Add New To Do'}</h2>
      <form>
        <div className="todo-form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {todo && (
          <>
            <div className="todo-form-group">
              <label>Date Created:</label>
              <div className="todo-date-display">{date}</div>
            </div>

            <div className="todo-form-group todo-form-checkbox">
              <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              <label htmlFor="completed">Completed</label>
            </div>
          </>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditToDo;

