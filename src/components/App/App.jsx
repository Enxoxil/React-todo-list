import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, ChangeInputValue, RemoveTodo, doneTodoItem } from "../../redux/redux.js";
import { nanoid } from "nanoid";
import { Todo } from "../Todo/Todo.jsx";

const App = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.input);
    const todoList = useSelector((state) => state.todoList);

    const changeInputValue = (e) => {
        dispatch(ChangeInputValue(e.target.value));
    };
    const addTodoItem = (e) => {
        e.preventDefault();
        const id = nanoid(8);
        dispatch(AddTodo(e.target[0].value, id));
    };
    const removeTodoItem = (item) => {
        dispatch(RemoveTodo(item.id));
    };
    const doneTodo = (item) => {
        dispatch(doneTodoItem(item.id));
    };
    return (
        <>
            {" "}
            <form
                onSubmit={(e) => {
                    addTodoItem(e);
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        changeInputValue(e);
                    }}
                    value={inputValue}
                    placeholder="Text"
                />
                <button>Click me</button>
            </form>
            <div>
                {todoList.map((item, index) => (
                    <Todo
                        item={item}
                        key={index}
                        removeTodoItem={removeTodoItem}
                        doneTodoItem={doneTodo}
                    />
                ))}
            </div>
        </>
    );
};

export default App;
