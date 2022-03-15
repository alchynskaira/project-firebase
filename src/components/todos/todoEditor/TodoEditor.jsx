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
        <form className="todoEditor" onSubmit={handleSubmit}>
            <TextField placeholder="Add todo here" className="todoList-input" value={inputValue} onChange={handleChange}>Some text</TextField>
            <Button variant="contained" type="submit" className="editor-btn" onSubmit={onSubmit}>Save</Button>
        </form>
    )

}

export default TodoEditor;