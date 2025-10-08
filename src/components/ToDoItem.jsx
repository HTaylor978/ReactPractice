import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const ToDoItem = ({ id, date, description, completed }) => {
    return (
        <section className={`todo-item ${completed ? 'strikethrough' : ''}`}>
            <div className="todo-description">{description}</div>
            <div className="todo-date">{date}</div>
            <div className="todo-action">
                <Link to={`/edit/${id}`}>Edit</Link>
            </div>
            <div className="todo-completed">
                {completed ? 'Completed' : 'Pending'}
            </div>
        </section>
    );
};


export default ToDoItem;