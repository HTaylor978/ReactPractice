import React from 'react';
import ToDoItem from './ToDoItem';
import '../App.css';

const ToDoList = ({ todos, onEdit }) => {
    return (
        <main>
            <h2>To Do List</h2>
            
            <div className="todo-list-header">
                <div>Description</div>
                <div>Date Created</div>
                <div>Action</div>
            </div>

            {todos.map(todo => (
                <ToDoItem
                    key={todo._id}
                    date={todo.todoDateCreated}
                    description={todo.todoDescription}
                    completed={todo.todoCompleted}
                    onEdit={() => onEdit(todo._id)}
                />
            ))}
        </main>
    );
};

export default ToDoList;

