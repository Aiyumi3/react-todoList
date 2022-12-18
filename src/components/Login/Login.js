import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";

import "./Login.css";

export function Login(){

    const [user, setUser] = useState('');
    const [style, setStyle] = useState("");

    const handleClick = (event) =>{
        event.preventDefault();
        let inp = document.querySelector('input[name=\'user\']');
        let typedTxt = inp.value;
        if(typedTxt !== ''){
            setUser(typedTxt);
            setStyle("toleft");
        }else{
            alert('empty!!!');
            setUser('');
            setStyle('');
        }

    };
    useEffect(()=>{
        if(user !== ''){
            localStorage.setItem('savedUser', user);
            window.location.reload(false);
        }
        }
    );


    return (
        <main>
            { localStorage.getItem('savedUser') !== null ? '' : (
            <fieldset id="login" className={style}>
                <legend>~ Create User ~</legend>
                <label>your name:
                    <input type='text' name='user'
                           placeholder='enter name/nickname'   />
                </label>
                <button onClick={handleClick}>~ user ~</button>
            </fieldset>)}
        </main>
    )
}

