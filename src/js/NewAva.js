import Header from "./Navigation";
import React from "react";
//import "../css/MeshStyle.css";


export default function NewAva({ newAva, handleChange, handleSubmit }) {

    return (
        <div>
            <Header />
            <br/><br/>
            <form onSubmit={handleSubmit}>
                    <input type="text" style={{borderRadius: '30px'}} id="inp-name" placeholder="enter name"
                    name='title' value={newAva.title || ""} onChange={handleChange} />
                    {!newAva.title ? null : (
                        <>
                            <button type="submit">add user</button>
                        </>
                    )}
            </form>

            <br/>
        </div>
    )
}
/*
* <div className="container">
                <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6" id="ava-container">

                </div>
            </div>
* */