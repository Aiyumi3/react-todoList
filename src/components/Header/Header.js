import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";
import ReactDOM from 'react-dom/client';
import "./Header.css";
import { Login } from "../Login/Login.js";


export function Header(){
    const [style, setStyle] = useState("");
    const [user, setUser] = useState('');
    const onClick = () => {
        setStyle('clicked');
    };

    const changeName = (e) => {
        e.preventDefault();
        let inp = document.querySelector('input[name=\'user\']');
        let typedTxt = inp.value;
        if(typedTxt !== ''){
            setUser(typedTxt);
        }
    };
    useEffect(()=>{
        if(user !== ''){
            localStorage.setItem('savedUser', user);
            window.location.reload(false);
        }
    }, [user]
    );



    return (
        <>
            { localStorage.getItem('savedUser') !== null ? (<div className='fromUp'>
                    <h2>T O D O <sup><i>List</i></sup></h2>
                    <em id='uName' className={style} onClick={onClick}> 🐱‍💻 {localStorage.getItem('savedUser')}
                        {style ?
                            <form onSubmit={changeName}><input type='text' name='user'  placeholder='enter new name'   /></form>: ''}
                    </em>
                </div>
            ) : (
                <div className='fromUp'>
                    <h2>T O D O <sup><i>List</i></sup></h2>
                </div>
            )}
        </>
    )
}

