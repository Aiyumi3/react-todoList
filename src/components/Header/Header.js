import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";
import ReactDOM from 'react-dom/client';
import "./Header.css";
import { Login } from "../Login/Login.js";


export function Header(){


    return (
        <>
            { localStorage.getItem('savedUser') !== null ? (<div className='fromUp'>
                    <h2>T O D O <sup><i>List</i></sup></h2>
                    <em id='uName'> 🐱‍💻{localStorage.getItem('savedUser')}</em>
                </div>
            ) : (
                <div className='fromUp'>
                    <h2>T O D O <sup><i>List</i></sup></h2>
                </div>
            )}
        </>
    )
}

