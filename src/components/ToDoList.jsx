import React from 'react';
import ToDoItem from './ToDoItem';
import '../App.css';

const ToDoList = ({ todoModels }) => {
    return (
        <main>
            <h2>To Do List</h2>
            
            <div className="todo-list-header">
                <div>Description</div>
                <div>Date Created</div>
                <div>Action</div>
                <div>Status</div>
            </div>

            {todoModels.map(todo => (
                <ToDoItem
                    key={todo.getId()}
                    id={todo.getId()}
                    date={todo.getFormattedDate()}
                    description={todo.getDescription()}
                    completed={todo.getCompleted()}
                />
            ))}
        </main>
    );
};

export default ToDoList;

