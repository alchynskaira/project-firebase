import React from "react";
import TodosMain from "../components/todos/todosMain/TodosMain";
import WeatherWidget from "../components/weatherWidget/WeatherWidget";


const HomePage = () => {

    return (
        <>
      <TodosMain/>
        <WeatherWidget/>
        </>
    );
};

export default HomePage;