import React, { useState } from "react";
import NewAva from "./NewAva";
import AvaList from "./AvaList";


export default function Ava() {

    const [newAva, setNewAva] = useState({});
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewAva((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    const [all, setAll] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newAva.title) return;
        setAll((prev) => [newAva, ...prev]);
        setNewAva({});
    };


    return (
        <div>
            <NewAva newAva={newAva} handleChange={handleChange} handleSubmit={handleSubmit}  />
            <AvaList all={all} />
        </div>
    );
}