import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";
import ReactDOM from 'react-dom/client';
import "./Main.css";
import { Login } from "../Login/Login.js";


export function Main(){
    //const [task, setTask] = useState({});
    //const [allTasks, setAllTasks] = useState([]);

    /*const handleClick = (event) =>{
        event.preventDefault();
        let title = document.querySelector('input[name=\'title\']').value;
        let detail = document.querySelector('input[name=\'detail\']').value;




        const oldTask = JSON.parse(localStorage.getItem("tasks"));
        const newTask = {

        };
        //localStorage.setItem("tasks", JSON.stringify([newTask, ...oldTask]));
        //setTask([newTask, ...oldTask]);
        setTask(prev => ({
            ...prev,
            id: generateUID(),
            complete: false,
            title,
            detail
            })
        );

        if (!task.title) return;
        setAllTasks((prev) => [task, ...prev]);
        setTask({});
    };
    useEffect(()=>{
            if(task !== ''){
                localStorage.setItem('savedTasks', JSON.stringify(allTasks));

            }
        }
    );
    const newTodoInput = useRef();
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('savedTasks'));
        if (storedTodos) {
            setAllTasks(storedTodos);
            setFilter('all');
            setFilteredTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        if(todos.length !== 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        }
    }, [todos])
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
*/
    /*

    //function Todos() {



    //}

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
    };*/
    function generateUID(){
        const r = (Math.floor(Math.random() * 1000000)).toString(16);
        const d = Date.now().toString(16);
        return r + d;
    }
    const [todos, setTodos] = useState([]);


    const newTodoInput = useRef();
    const newTodoInput2 = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('savedTasks'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        if(todos.length !== 0) {
            localStorage.setItem('savedTasks', JSON.stringify(todos))
        }
    }, [todos])

    const [style, setStyle] = useState("");
    const [style2, setStyle2] = useState("");


    function handleAddTodo(event) {
        event.preventDefault();
        const todoName = newTodoInput.current.value;
        const todoInf = newTodoInput2.current.value;
        if (todoName === "") {
            return;
        }
        if (todoInf === "") {
            document.querySelector('p').style.display='none';
        }
        setTodos([...todos, { id: generateUID(), todoName: todoName, todoInf:todoInf, complete: false }]);
        newTodoInput.current.value = null;
        newTodoInput2.current.value = null;


    }

    function toggleTodo(id) {
        const newTodos = [...todos];
        const selectedTask = todos.find(todo => todo.id === id);
        selectedTask.complete = !selectedTask.complete;
        setTodos(newTodos);

    }
    function handleClear() {//clear completed
        const remainingTodos = todos.filter(todo => !todo.complete);
        setTodos(remainingTodos);
    }
    function handleClearAll() {//clear all
        localStorage.removeItem('savedTasks');
        window.location.reload(false);
    }
    function deleteTodo(idToRemove) {//clear by id
        const remainingTodos = todos.filter(todo => todo.id !== idToRemove);
        setTodos(remainingTodos);
    }
    function countRemaining() {//uncompleted number
        const count = todos.filter(todo => !todo.complete);

        if (count.length === 1) {
            return `1 item left`;
        } else {
            return `${count.length} items left`;
        }
    }

    function handleToggle(todo) {
        toggleTodo(todo.id);

    }



    return (
        <>
        <form onSubmit={handleAddTodo} className="add-task">
            { localStorage.getItem('savedUser') !== null ?  (<>
                <fieldset>
                    <label id='label'>📝 :
                        <input type='text' name='task' ref={newTodoInput}
                               placeholder='enter task title' autoFocus  />
                        <input className='inpTaskDetail' type='text' name='info' ref={newTodoInput2}
                               placeholder='enter task detail'  />
                    </label>
                    <button type='submit' id='addT'> + </button>
                </fieldset>
                    <div className="remaining">{countRemaining()}</div>
                    <button className="clear" onClick={handleClear}>Clear Completed</button>
                    <button className="clear" onClick={handleClearAll}>Clear All</button>

                <div className='cols'>
                    {todos.map(todo => (
                        <div className='taskToDo' key={todo.id} >
                        <label>
                            <input className="todo-checkbox" type="checkbox" checked={todo.complete}
                                   onChange={() => handleToggle(todo)}
                            />
                            {todo.complete ? <span className='checked'><b>{todo.todoName}</b>
                                <p><span className='inf'> {todo.todoInf}</span></p> </span> : (
                                <span className='task'><b>{todo.todoName}</b>
                                <p><span className='inf'> {todo.todoInf}</span></p></span>) }
                        </label>
                            <div className='todo-delete1'><div className='todo-delete2'>
                            <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                                <sup><small>╰(*°▽°*)╯</small><i><sup>📜</sup></i></sup>
                                🗑</button>
                        </div></div>
                        </div>
                    ))}
                </div>


                </>
            ) : '' }
        </form>

        </>
    )

}
