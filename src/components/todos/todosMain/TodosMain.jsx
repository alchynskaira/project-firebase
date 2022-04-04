import React,{useState, useEffect}from  "react";
import TodoList from "../todoList/TodoList";
import TodoEditor from "../todoEditor/TodoEditor";
import {db} from "../../../firebaseConfig";
import AlertMessage from "../../alert/AlertMessage";
import {useAlertContext} from "../../../helpers/alertContextProvider";
import Loader from "../../loader/Loader";



const TodosMain = () => {
    const { showAlert, showHideLoading } = useAlertContext();
    const [todos, setTodos] = useState([]);


    const getTodoData = () => {
        showHideLoading.isVisible(true);
        const currentUser = JSON.parse(localStorage.getItem( "userData"));
        db.collection('todo').where("userId", "==", currentUser.uid).get().then(snapshot => {
            const userTodos = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });

            setTodos(userTodos);
            showHideLoading.isVisible(false);
        }).catch((error) => {
            showHideLoading.isVisible(false);
            showAlert("error", "Something went wrong, try again!");
            console.error("Error getting document: ", error);
        });

    }

    useEffect(() => {
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
            showAlert('success', 'Task successfully added');
            getTodoData();
        })
        .catch((error) => {
            showAlert("error", "Something went wrong, try again!");
            console.error("Error adding document: ", error);
        });
}

    const deleteTodo = (id) => {
        db.collection("todo").doc(id).delete().then(() => {
            showAlert('success', 'Task successfully deleted!');
            console.log("Document successfully deleted!");
            getTodoData();
        }).catch((error) => {
            showAlert("error", "Something went wrong, try again!");
            console.error("Error removing document: ", error);
        });
    };

    const toggleCompleted = (todo) => {
        db.collection("todo").doc(todo.id).update({
            completed: !todo.completed
        }).then(() => {
            showAlert('success', 'Task successfully updated!');
            console.log("Document successfully updated!");
            getTodoData();
        }).catch((error) => {
            showAlert("error", "Something went wrong, try again!");
            console.error("Error updating document: ", error);
        });
    }

    return (
        <>
        <AlertMessage/>
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
            <Loader/>
        </div>
        </>
    );
}

export default TodosMain;