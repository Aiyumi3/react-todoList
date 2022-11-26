import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/AvaStyle.css";
import useCookie from 'react-use-cookie';
import { getCookie } from 'react-use-cookie';
import { Route } from 'react-router-dom';
import Content from './Content';
import Header from './Navigation';

export default function Ava() {
    const [ip, setIP] = useState('');//creating IP state
    const [city, setCity] = useState('');
    const [countryCode, setCountryCode] = useState('');
    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        setIP(res.data.IPv4);
        setCity(res.data.city);
        setCountryCode(res.data.country_code);
    }
    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    }, []);


    const [userToken, setUserToken] = useCookie('user', '');
    const [newAva, setNewAva] = useState({});
    const [style, setStyle] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewAva((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };
    const [allAva, setAll] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newAva.title) return;
        setAll((prev) => [newAva, ...prev]);
        setNewAva({});
        setStyle("hidden");

        setUserToken(ip,{
            days: 365,
            SameSite: 'Strict',
            Secure: true
        });
        localStorage.setItem('username', newAva.title)

    };

        return (
            <div className="flex-col-hstart-vstart clip-contents">
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    {localStorage.getItem('username') ? null : (
                        <input placeholder="enter name"
                               name='title' value={newAva.title || ""} onChange={handleChange} className={style}/>
                    )
                    }


                    {!newAva.title ? null : (
                        <>
                            <button type="submit">add user</button>
                        </>
                    )}
                </form>
                <ul>
                    {allAva.map(({ title, id }) => (
                        <li key={id}>
                            <div>
                                {
                                    localStorage.getItem('username') ?
                                        <h2>{localStorage.getItem('username').value}</h2> : <h2>{title}</h2>
                                }

                            </div>
                        </li>
                    ))}
                </ul>

                <h3>{city}, {countryCode}</h3>

            </div>
        );

}
