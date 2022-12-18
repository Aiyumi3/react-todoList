import React from 'react';
import { useState, useEffect, useRef, useReducer  } from "react";
import ReactDOM from 'react-dom/client';
import "./Footer.css";
import { Login } from "../Login/Login.js";


export function Footer(){


    return (
        <>
            <div className='fromDown'>
                <h2>T O D O <sup><i>List</i></sup></h2>
                <p>Copyright © 2022 <a href="https://mobile.twitter.com/salaninalgae" target="_blank">
                Aiyumi S2</a>, For Entertainment, All rights reserved.</p>
            </div>

        </>
    )
}

