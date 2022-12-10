import "../css/ContentStyle.css";
import React, { useState, useEffect } from "react";
import useCookie from 'react-use-cookie';
import { getCookie } from 'react-use-cookie';


export default function Content() {
    const [style, setStyle] = useState("");

    const [newTask, setNewTask] = useState({});
    const [userToken, setUserToken] = useCookie('task', '');
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [allTasks, setAllTasks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTask.title) return;
        setAllTasks((prev) => [newTask, ...prev]);
        setNewTask({});

        setStyle("show");

        setUserToken(newTask.id,{
            days: 365,
            SameSite: 'Strict',
            Secure: true
        });
        localStorage.setItem('task title', newTask.title);
        localStorage.setItem('task desc', newTask.description);

    };
    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(
            (task) => task.id !== taskIdToRemove
        ));

        setStyle("hidden");
        setUserToken('',{
            days: 365,
            SameSite: 'Strict',
            Secure: true
        });
        localStorage.setItem('task title', '');
        localStorage.setItem('task desc', '');
    };
    const [style2, setStyle2] = useState("");
    const mouseMoveHandler =  (e) => {
        let pos = { top: 0,  y: 0 };
        const dy = e.clientY - pos.y;
        const he =  pos.top + dy -150 + 'px';


        const ele = document.querySelector('.taskToDoDescr');
        const ele2 = document.querySelector('.taskToDo');
        ele.setAttribute('style', 'height: '+he);
        ele2.setAttribute('style', 'height: '+he);
        //ele.scrollTop = dy - pos.top;

        //setStyle2("popUp");


    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
            <input name="title" className="inpTask" placeholder="title" value={newTask.title || ""} onChange={handleChange} />
            {!newTask.title ? null : (
                <><textarea className="inpTaskDetail" name="description" placeholder="details..." value={newTask.description || ""}
              onChange={handleChange} />

                </>
            )}
            </form>


            <div className={style}>
                <div className={style2}>
                <h2 className="taskToDo">{
                    localStorage.getItem('task title') }</h2>

                <button className="deleteT" onClick={() => handleDelete(newTask.id)}>X</button>
                 </div>

            </div>

            <p className="taskToDoDescr" onClick={mouseMoveHandler}>
                <div className={style2}>
                { localStorage.getItem('task desc') == undefined ? '': localStorage.getItem('task desc')}
                    </div>
            </p>

        </main>
    );
}
/*
<div className={style}>

                <h2 className="taskToDo">{
                    localStorage.getItem('task title') }</h2>
                <button className="deleteT" onClick={() => handleDelete(newTask.id)}>X</button>


            </div>
            <p className="taskToDoDescr">{ localStorage.getItem('task desc') == undefined ? '': localStorage.getItem('task desc')}</p>

*//*
<ul>
    {allTasks.map(({ title, description, id }) => (
        <li key={id}>

            <div className={style}>

                <h2 className="taskToDo">{ localStorage.getItem('task title')==true ?
                    localStorage.getItem('task title') : title}</h2>
                <button className="deleteT" onClick={() => handleDelete(id)}>X</button>


            </div>
            { !description ? null : <p className="taskToDoDescr" onDrag={mouseMoveHandler}>{ localStorage.getItem('task id')==true ? localStorage.getItem('task desc') : description}</p>

            }

        </li>
    ))}
</ul>*/