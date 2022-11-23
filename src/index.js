import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import "./style.css";
import reportWebVitals from './reportWebVitals';
import Header from "./js/Navigation";
import Footer from "./js/Footer";

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(
    <React.StrictMode>
        <Header />
    </React.StrictMode>
);
//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
