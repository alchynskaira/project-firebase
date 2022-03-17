import React, {useEffect, useState} from "react";
import {db} from '../../helpers/firebase/firebaseConfig';
import Todo from "../todo/Todo";
import "../Todos.css";

const TodoList = ({todos, setTodos, onDeleteTodo, onToggleCompleted }) => {

    // useEffect(()=> {
    //     db.collection('todo').get('value', (snapshot)=> {
    //         const todoList =snapshot.val();
    //         console.log(todoList, "list")
    //         const todolistItems =[];
    //         for(let id in todos) {
    //             todolistItems.push({id, ...todoList[id]})
    //         }
    //         setTodos(todolistItems);
    //         console.log(todolistItems);
    //     })
    // }, [])

  return   (

        <ul className="todoList">
            {todos.map(({ id, text, completed}) => (
                <li
                    key={id}
                    className={todos.completed ? "item-text strike" : "todoList-item"}
                >
                    <Todo
                        text={text}
                        completed={completed}
                        onToggleCompleted={() => onToggleCompleted(id)}
                        onDelete={() =>  onDeleteTodo(id)}
                    />
                </li>
            ))}
        </ul>
    );
}


export default TodoList;