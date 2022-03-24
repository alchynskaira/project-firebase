import React from 'react';
import "../Todos.css";

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
    <>

        <input
            type="checkbox"
            className="todo-checkbox"
            checked={completed}
            onChange={onToggleCompleted}
        />
        <p className="todo-text">{text}</p>
        <button type="button" className="todo-btn" onClick={onDelete}>
            Delete
        </button>
    </>
);

export default Todo;