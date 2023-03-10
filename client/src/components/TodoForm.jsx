import React, { useState, useEffect, useRef } from "react";
import "./Todo.css";

function TodoForm(props) {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //for no refresh page

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        });
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="todoform-section">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add task"
                    value={input}
                    name="text"
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className="todo-button">Add To Do</button>
            </form>
        </div>
    );
}

export default TodoForm;
