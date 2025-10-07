import React, { useEffect, useState } from 'react';
import '../App.css';
import ToDoModel from '../ToDoModel';
import axios from 'axios';

const AddEditToDo = ({ todo }) => {
	const [description, setDescription] = useState(todo ? todo.getDescription() : '');
	const [completed, setCompleted] = useState(todo ? todo.getCompleted() : false);
	const date = todo ? todo.getFormattedDate() : '';
  const [toDo, setToDo] = useState(todo ? todo : '');

  useEffect(() => {
    const submit = async () => {
      if (toDo instanceof ToDoModel) {
        try {
          const toDoPayload = {
            "_id": toDo.getId(),
            "todoDescription": toDo.getDescription(),
            "todoDateCreated": toDo.getDate(),
            "todoCompleted": toDo.getCompleted()
          };
          console.log('Sending toDo:', toDoPayload);

          await axios.post("http://localhost:5001/api/update-json", toDoPayload, {
            headers: {
              'Content-Type': 'application/json'
            }});
        } catch (error) {
          console.error("Failed to submit to json");
        }
      }
    };
    submit();
  }, [toDo]);

  const createToDo = (description) => {
    const today = new Date();
    const newToDo = new ToDoModel(description, today, false);
    setToDo(newToDo);
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

        <button type="submit" onClick={(e) => { e.preventDefault(); createToDo(description);}}>Save</button>
      </form>
    </div>
  );
};

export default AddEditToDo;

