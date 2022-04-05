import React from "react";
import "../Todos.css";
import classNames from "classnames";
import {Button, Checkbox} from "@mui/material";

const TodoList = ({todos,  onDeleteTodo, onToggleCompleted }) => {

    return (

        <ul className="todoList">
            {todos.map((todo) => (
                <li key={todo.id} className={classNames("todoList-item", {
                    "todoList-item-completed": todo.completed,
                })}>
                    <div className="contentList-box">
                        <Checkbox
                            type="checkbox"
                            className="todo-checkbox check"
                            checked={todo.completed}
                            onChange={() => onToggleCompleted(todo)}
                        />
                        <p className="todo-text">{todo.title}</p>
                    </div>
                    <Button type="button" variant="contained" className="todoList-btn button"
                            onClick={() => onDeleteTodo(todo.id)}>
                        Delete
                    </Button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;