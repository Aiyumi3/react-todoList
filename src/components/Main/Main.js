import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";
import ReactDOM from 'react-dom/client';
import "./Main.css";
import { Login } from "../Login/Login.js";


export function Main(){

    function generateUID(){
        const r = (Math.floor(Math.random() * 1000000)).toString(16);
        const d = Date.now().toString(16);
        return r + d;
    }
    const initialTodos = [
        {
            id: 1,
            title: "Todo 1",
            complete: false,
        },
        {
            id: 2,
            title: "Todo 2",
            complete: false,
        },
    ];

    const reducer = (state, action) => {
        switch (action.type) {
            case "COMPLETE":
                return state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, complete: !todo.complete };
                    } else {
                        return todo;
                    }
                });
            default:
                return state;
        }
    };

    function Todos() {
        const [todos, dispatch] = useReducer(reducer, initialTodos);
        // const [userToken, setUserToken] = useCookie('task List', []);
        const onClickCreate = () => {

            const inpTask = document.querySelector('#inp-task');
            const title = inpTask.value;
            const task = { title };
            task.uid = generateUID();
            //saveTask(task);

            // renderTask(task);
            inpTask.value = "";



        }

        const handleComplete = (todo) => {
            dispatch({ type: "COMPLETE", id: todo.id });
        };

        const [inputValue, setInputValue] = useState("");
        const previousInputValue = useRef("");

        useEffect(() => {
            previousInputValue.current = inputValue;
        }, [inputValue]);

        return (
            <>
                <input id="inp-task"
                       type="text"
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={onClickCreate}>create</button>
                <h2>Current Value: {inputValue}</h2>
                <h2>Previous Value: {previousInputValue.current}</h2>

                {todos.map((todo) => (
                    <div key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo)}
                            />
                            TO DO: {todo.title}
                        </label>
                    </div>
                ))}
            </>
        );
    }

}

