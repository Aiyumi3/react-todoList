import "../css/ContentStyle.css";
import React, { useState } from "react";


export default function Content() {
    const [style, setStyle] = useState("");

    const [newTask, setNewTask] = useState({});
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

        setStyle("side");
    };
    const handleDelete = (taskIdToRemove) => {
        setAllTasks((prev) => prev.filter(
            (task) => task.id !== taskIdToRemove
        ));
    };


    return (
        <main>
            <form onSubmit={handleSubmit}>
            <input name="title" className="inpTask" placeholder="new task" value={newTask.title || ""} onChange={handleChange} />
            {!newTask.title ? null : (
                <><textarea className="inpTaskDetail" name="description" placeholder="details..." value={newTask.description || ""}
              onChange={handleChange} />

                </>
            )}
            </form>

            <ul>
                {allTasks.map(({ title, description, id }) => (
                    <li key={id}>
                        <div className={style}>
                            <h2 className="taskToDo">{title}</h2>
                            <button className="deleteT" onClick={() => handleDelete(id)}>
                                X
                            </button>

                        </div>
                        {!description ? null : <p className="taskToDoDescr">{description}</p>}
                    </li>
                ))}
            </ul>
        </main>
    );
}
/*
*/