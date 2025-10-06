import React from 'react';
import '../App.css';

const ToDoItem = ({ date, description, completed, onEdit }) => {
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(new Date(date));

    return (
        <section className={`todo-item ${completed ? 'strikethrough' : ''}`}>
            <div className="todo-description">{description}</div>
            <div className="todo-date">{formattedDate}</div>
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

