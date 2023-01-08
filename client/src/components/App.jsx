import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";

export default function App() {
    return (
        <div className="app-section">
            <h1>My To Dos</h1>
            <TodoForm />
        </div>
    );
}
