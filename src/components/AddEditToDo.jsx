import React, { useState } from 'react';
import '../App.css';
import ToDoModel from '../ToDoModel';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddEditToDo = ({ todoModels, onSave }) => {
  const { id } = useParams();
  const todo = id ? todoModels.find(t => t.getId().toString() === id) : null;

	const [description, setDescription] = useState(todo ? todo.getDescription() : '');
	const [completed, setCompleted] = useState(todo ? todo.getCompleted() : false);
	const date = todo ? todo.getFormattedDate() : '';

  const navigate = useNavigate();

  const updateToDoList = async (toDoInstance) => {
    if (toDoInstance instanceof ToDoModel) {
      try {
        const toDoPayload = {
          "_id": toDoInstance.getId(),
          "todoDescription": toDoInstance.getDescription(),
          "todoDateCreated": toDoInstance.getDate(),
          "todoCompleted": toDoInstance.getCompleted()
        };
        console.log('Updating to do list:', toDoPayload);
        await axios.post("http://localhost:5001/api/edit-json", toDoPayload, {
          headers: {
            'Content-Type': 'application/json'
          }});
      } catch (error) {
        console.error("Failed to edit to json");
      }
    }
  };

  const createToDo = (description) => {
    const today = new Date();
    const newToDo = new ToDoModel(description, today, false);
    return newToDo;
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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

        <button type="submit" onClick={(e) => { 
          if (todo) {
            todo.setDescription(description);
            todo.setCompleted(completed);
            updateToDoList(todo)
          } else {
            e.preventDefault();
            const newToDo = createToDo(description);
            setDescription('');
            updateToDoList(newToDo);
            onSave();
          }
          navigate('/');
        }}>Save</button>
      </form>
    </div>
  );
};

export default AddEditToDo;

