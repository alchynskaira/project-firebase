import React from "react";
import {getUserState} from "../components/isAuthenticated";
import TodosMain from "../components/todos/todosMain/TodosMain";




const HomePage = () => {

    getUserState();


    return (
        <>
      <TodosMain/>
        </>
    );
};

export default HomePage;