import React from "react";
import "./App.css";
import TodoList from "./TodoList";

export default function App() {
    return (
        <div className="app-section">
            <h1>My To Dos</h1>
            <TodoList />
        </div>
    );
}
