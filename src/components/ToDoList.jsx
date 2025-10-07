import React from 'react';
import ToDoItem from './ToDoItem';
import '../App.css';
import ToDoModel from '../ToDoModel';

const ToDoList = ({ todos, onEdit }) => {
    const todoModels = todos.map(todo => (new ToDoModel(todo.todoDescription, todo.todoDateCreated, todo.todoCompleted)))

    return (
        <main>
            <h2>To Do List</h2>
            
            <div className="todo-list-header">
                <div>Description</div>
                <div>Date Created</div>
                <div>Action</div>
            </div>

            {todoModels.map(todo => (
                <ToDoItem
                    key={todo.getId()}
                    date={todo.getFormattedDate()}
                    description={todo.getDescription()}
                    completed={todo.getCompleted()}
                    onEdit={() => onEdit(todo.getId())}
                />
            ))}
        </main>
    );
};

export default ToDoList;

