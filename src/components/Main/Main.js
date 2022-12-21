import React from 'react';
import { useState, useEffect, useRef  } from "react";

import "./Main.css";


export function Main(){

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
    }, []);

    useEffect(() => {
        if(todos.length !== 0) {
            localStorage.setItem('savedTasks', JSON.stringify(todos))
        }
    }, [todos]);


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

    const scrollToLeft = () => {
        document.querySelector('.cols').scrollLeft -= 1200;
    }
    useEffect(()=>{
        scrollToLeft();
    }
    );

    const [selectedId, setSelectedId] = useState("");

    const editTask = () => {
        console.log(selectedId);

        let inp = document.querySelector('#overForm input[name=\'task\']');
        let inp2 = document.querySelector('#overForm input[name=\'info\']');

        const todoName = inp.value;
        const todoInf = inp2.value;

        setTodos(todos.map(todo => {
            if (todo.id === selectedId) {
                todo.todoName = todoName;
                todo.todoInf = todoInf;
            }
            return todo;
        }));
        inp.value ='';
        inp2.value ='';

    };

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
                                <span className='task'><b >{todo.todoName}
                                </b>
                                <p><span className='inf'> {todo.todoInf}</span></p></span>) }
                        </label>
                            <div className='todo-delete1'><div className='todo-delete2'>
                            <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>
                                <sup><small>╰(*°▽°*)╯</small><i><sup>📜</sup></i></sup>
                                🗑</button>
                                <div style={{ transform: 'translateX(115px) translateY(15px)'}}>
                                    <a className='aTodo' href="#popup1" onClick={() => setSelectedId(todo.id)}> 📝 </a>
                                </div>
                            </div></div>

                        </div>
                    ))}

                </div>
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h2>Edit task *:･ﾟ✧🖋</h2>
                            <a className="close" href="#">&times;</a>

                            <div className="content">
                                <div>
                                    <fieldset id="overForm">
                                        <label id='label'>📝 :
                                            <input type='text' name='task'
                                                   placeholder='enter task title' autoFocus  />
                                            <input className='inpTaskDetail' type='text' name='info'
                                                   placeholder='enter task detail'  />
                                        </label>
                                        <button id='addT' onClick={editTask}> 🖋 </button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : '' }
        </form>

        </>
    )

}
