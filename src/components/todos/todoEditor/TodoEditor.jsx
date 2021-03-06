import React, { useState} from "react";
import {TextField, Button} from "@mui/material";
import "../Todos.css";



const TodoEditor = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState("");


    const handleChange = e => {
        setInputValue(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue) return;
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <div>
        <form className="todoEditor" onSubmit={handleSubmit}>
            <TextField placeholder="Add todo here" className="todoList-input" value={inputValue} onChange={handleChange}>Some text</TextField>
            <Button variant="contained" type="submit" className="todo-btn button" onSubmit={onSubmit}>Save</Button>
        </form>
        </div>
    )

}

export default TodoEditor;