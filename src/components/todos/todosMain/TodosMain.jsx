import React,{useState, useEffect}from  "react";
import shortid from 'shortid';
import TodoList from "../todoList/TodoList";
import TodoEditor from "../todoEditor/TodoEditor";



const TodosMain = ()=>{
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

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