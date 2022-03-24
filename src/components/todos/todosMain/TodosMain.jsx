import React,{useState, useEffect}from  "react";
import shortid from 'shortid';
import TodoList from "../todoList/TodoList";
import TodoEditor from "../todoEditor/TodoEditor";

import {db} from "../../helpers/firebase/firebaseConfig";
import FlashMessage from "../../helpers/alert/FlashMessage";




const TodosMain = ()=>{
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);


    const getTodoData = () => {
        const currentUser = JSON.parse(localStorage.getItem( "userData"));


    const addTodo = (text) => {
        const newTodos = {
            id: shortid.generate(),
            text: text,
            isCompleted: false,
            filter: "",
        };
        setTodos([newTodos, ...todos]);
        window.localStorage.setItem( "todos", JSON.stringify(newTodos))
    };


    useEffect(() => {

        localStorage.setItem( "todos", JSON.stringify(todos));
    }, [todos])


    const deleteTodo = todoId => {
        const deleteTodo = todos.filter(todo => todo.id !== todoId);
        setTodos(deleteTodo);
    };

    const toggleCompleted = todoId => {

        const toggle = todos.map((todo) =>
            todo.id === todoId ? { ...todos, isCompleted : !todos.isCompleted } : {...todos} )

        setTodos(toggle);


        getTodoData();
    }, [])


    const addTodo =  (text) => {
        const currentUser = JSON.parse(localStorage.getItem( "userData"));
        const todoItem = {
            title: text,
            completed: false,
            userId: currentUser.uid,
        }
        db.collection("todo").add(todoItem)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            todoItem.id = docRef.id;

            getTodoData();
        })
        .catch((error) => {

            console.error("Error adding document: ", error);
        });
}

    const deleteTodo = (id) => {
        db.collection("todo").doc(id).delete().then(() => {

            console.log("Document successfully deleted!");
            getTodoData();
        }).catch((error) => {

            console.error("Error removing document: ", error);
        });
    };

    const toggleCompleted = (todo) => {
        db.collection("todo").doc(todo.id).update({
            completed: !todo.completed
        }).then(() => {

            console.log("Document successfully updated!");
            getTodoData();
        }).catch((error) => {

            console.error("Error updating document: ", error);
        });

    }


    return (

        <div className="container">
            <FlashMessage isOpen={open}  />
            <h1 className="title">TODO LIST</h1>
            <TodoEditor
                onSubmit={addTodo}
            />
            <TodoList
                todos={todos}
                onDeleteTodo={deleteTodo}
                onToggleCompleted={toggleCompleted}
            />

        </div>
    );
}

export default TodosMain;