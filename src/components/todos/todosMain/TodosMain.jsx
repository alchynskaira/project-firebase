import React,{useState, useEffect}from  "react";
import TodoList from "../todoList/TodoList";
import TodoEditor from "../todoEditor/TodoEditor";
import {db} from "../../helpers/firebase/firebaseConfig";


const TodosMain = () => {
    const [todos, setTodos] = useState([]);

    const getTodoData = () => {
        const currentUser = JSON.parse(localStorage.getItem( "userData"));

        db.collection('todo').where("userId", "==", currentUser.uid).get().then(snapshot => {
            const userTodos = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });
            setTodos(userTodos);
        })
    }

    useEffect(() => {
        getTodoData()
    }, [])


    const addTodo =  (text) => {
        const currentUser = JSON.parse(localStorage.getItem( "userData"));
          db.collection('todo').doc(currentUser.uid).set({
            title: text,
            completed: false,
            userId: currentUser.uid
        })
        setTodos(todos);
}

    const deleteTodo = todoId => {
        const deleteTodo = todos.filter(todo => todo.id !== todoId);
        setTodos(deleteTodo);
    };

    const toggleCompleted = todoId => {

        const toggle = todos.map((todo) =>
            todo.id === todoId ? { ...todos, isCompleted : !todos.isCompleted } : {...todos} )

        setTodos(toggle);

    }

    return (
        <div className="container">
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