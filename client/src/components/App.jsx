import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import Logo from "./Logo";

export default function App() {
    return (
        <div className="app-section1">
            <Logo />
            <div className="app-section2">
                <TodoList />
            </div>
        </div>
    );
}
