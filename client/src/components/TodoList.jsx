import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm.jsx";
import "./Todo.css";

function TodoList() {
    //list of tasks to do
    const [todos, setTodos] = useState([]);

    //adding tasks
    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        // console.log(...todos);
    };

    const updateTodo = (todoID, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((previous) =>
            previous.map((item) => (item.id === todoID ? newValue : item))
        );
    };

    const removeTodo = (id) => {
        const removedFromArray = [...todos].filter((todo) => todo.id !== id);

        setTodos(removedFromArray);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="todolist-section">
            <h1>Tasks to complete for the day</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
