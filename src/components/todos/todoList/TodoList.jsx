import React, {useEffect, useState} from "react";
import "../Todos.css";

const TodoList = ({todos, setTodos, getTodoData, onDeleteTodo, onToggleCompleted }) => {
    console.log(todos);
    // useEffect(()=> {
    //     getTodoData();
    // }, [])

  return   (

        <ul className="todoList">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        className="todo-checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleCompleted(todo)}
                    />
                    <p className="todo-text">{todo.title}</p>
                    <button type="button" className="todo-btn" onClick={() => onDeleteTodo(todo.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}


export default TodoList;