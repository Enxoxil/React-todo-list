import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, ChangeInputValue, RemoveTodo, RemoveDoneTodo, ChangeDoneTodoList } from "../../redux/todos-reducer.js";
import { nanoid } from "nanoid";
import { Todo } from "../Todo/Todo.jsx";
import classNames from 'classnames';
import s from './App.module.scss';
const App = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.input);
    const todoList = useSelector((state) => state.todoList);
    const doneTodoList = useSelector((state) => state.doneTodoList);


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
    const removeDoneTodoItem = (item) => {
        dispatch(RemoveDoneTodo(item.id));
    };

    const doneTodo = (item) => {
        dispatch(ChangeDoneTodoList(item.id));
    };
    return (
        <div className={s.todo__header}>
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
            <section className={classNames(s.todo__wrapper)} >
                <div className={classNames(s.todo__bodyActive)}>
                    {todoList.map((item, index) => (
                        <Todo
                            item={item}
                            key={index}
                            removeTodoItem={removeTodoItem}
                            doneTodoItem={doneTodo}
                        />

                    ))}
                </div>
                <div className={classNames(s.todo__bodyDone)}>
                    {doneTodoList.map((item, index) => (
                        <Todo
                            item={item}
                            key={index}
                            doneTodoItem={doneTodo}
                            removeTodoItem={removeDoneTodoItem}
                        />

                    ))}
                </div>
            </section>
        </div>
    );
};

export default App;
