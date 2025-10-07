import React from 'react';
import '../App.css';

const ToDoItem = ({ date, description, completed, onEdit }) => {
    return (
        <section className={`todo-item ${completed ? 'strikethrough' : ''}`}>
            <div className="todo-description">{description}</div>
            <div className="todo-date">{date}</div>
            <div className="todo-action">
                {!completed ? (
                    <button onClick={onEdit}>Edit</button>
                ) : (
                    <span style={{ color: '#aaa' }}>—</span>
                )}
            </div>
        </section>
    );
};


export default ToDoItem;

