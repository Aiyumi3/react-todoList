import { useState, useEffect, useRef, useReducer  } from "react";
import { Login } from "./components/Login/Login.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Main} from "./components/Main/Main";



//Todos

const todo = ReactDOM.createRoot(document.getElementById('root'));
todo.render(
    <React.StrictMode>
        <Login  />
    </React.StrictMode>
);
const header = ReactDOM.createRoot(document.querySelector('header'));
header.render(
    <React.StrictMode>
        <Header  />
    </React.StrictMode>
);
const footer = ReactDOM.createRoot(document.querySelector('footer'));
footer.render(
    <React.StrictMode>
        <Footer  />
    </React.StrictMode>
);
const main = ReactDOM.createRoot(document.querySelector('main'));
main.render(
    <React.StrictMode>
        <Main  />
    </React.StrictMode>
);