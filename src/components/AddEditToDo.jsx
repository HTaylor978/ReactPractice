import React, { useState } from 'react';
import '../App.css';

const AddEditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo ? todo.todoDescription : '');
  const [completed, setCompleted] = useState(todo ? todo.todoCompleted : false);

  let formattedDate;
  if (todo) {
        formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(todo.todoDateCreated));
    } else {
        formattedDate = "";
    };

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
              <div className="todo-date-display">{formattedDate}</div>
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

