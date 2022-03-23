import React from "react";
import {Checkbox, Button} from "@mui/material";
import "../Todos.css";

const TodoList = ({todos,  onDeleteTodo, onToggleCompleted }) => {

  return   (

        <ul className="todoList">
            {todos.map((todo) => (
                <li key={todo.id} className="todoList-item">
                    <div className="contentList-box">
                    <Checkbox
                        type="checkbox"
                        className="todo-checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleCompleted(todo)}
                    />
                    <p className="todo-text">{todo.title}</p>
                    </div>
                    <Button type="button" variant="contained" className="todoList-btn" onClick={() => onDeleteTodo(todo.id)}>
                        Delete
                    </Button>
                </li>
            ))}
        </ul>
    );
}


export default TodoList;