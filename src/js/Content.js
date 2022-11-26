import Ava from "./Ava";
import React, { useState } from "react";
//import "../css/MeshStyle.css";


export default function Content() {


    return (
        <div>
            <NewAva />
        </div>
    )

}
document.querySelector('#btn-generate').addEventListener('click', onClickGenerate);

function onClickGenerate(){
    const { isError, name } = inputAndCheckName();
    if(isError){
        return;
    }
    const user = { name };
    const arrPic = [
        'https://i.pinimg.com/564x/f6/c9/f1/f6c9f1e3b45625de5728f3b168221b7c.jpg',
        'https://i.pinimg.com/564x/5c/ab/65/5cab6555d1d72e00353b5e89247ccb05.jpg',
        'https://i.pinimg.com/564x/f0/d0/1b/f0d01bebb64fd175b0a2ede96dff2d62.jpg',
        'https://i.pinimg.com/564x/e1/ca/b8/e1cab87516f3c46ad8d71a09aa476342.jpg',
        'https://i.pinimg.com/564x/9c/72/89/9c728908273bc98ad2b6c0da20b57b78.jpg',
        'https://i.pinimg.com/564x/19/c6/20/19c620d672837b79d918a3c6e3ff8b3e.jpg',
        'https://i.pinimg.com/564x/14/e9/80/14e98054d979e79b884e7c51d330284d.jpg',
        'https://i.pinimg.com/564x/17/28/38/172838055bab845a9f07107cf8bbdfd2.jpg'
    ];
    user.ava = arrPic[random(0, arrPic.length - 1)];
    saveUser(user);
    renderUser(user);
}

function renderUser({ name, ava}) {
    const userHtml = `
    <div class="col mb-4">
    <div class="card h-100">
       
        <img src="${ava}" class="card-img-top" alt="avatar" style="    border-radius: 1000px; filter: blur(1px);height: 50%">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>      
         </div>
         </div>
    </div>
    </div>`;
    document.querySelector('#ava-container').insertAdjacentHTML('afterbegin', userHtml);
}

function inputAndCheckName(){
    const inpName = document.querySelector('#inp-name');
    const inpNameNot = document.querySelector('#inp-name-notify');

    const answ = {
        isError : false,
        name : inpName.value
    };

    inpName.value = '';
    inpNameNot.innerText = '';

    const regName = /\W/g;
    if(answ.name.length === 0 || answ.name.match(regName)){
        inpNameNot.innerText = 'ENTER A NAME(!!WITHOUT NON-WORD CHARACTERS!!)!';
        answ.isError = true;
    }
    return answ;
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function saveUser(user){
    let users = Cookie.get('users');
    users = users === '' ? [] : JSON.parse(users);
    users.push(user);
    Cookie.set('users', JSON.stringify(users), 30);
}
function firstLoad(){
    let users = Cookie.get('users');
    users = users === '' ? [] : JSON.parse(users);

    document.querySelector('#ava-container').innerHTML = '';
    users.forEach(renderUser);
}


class Cookie{
    static set(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }
    static get(cname) {
        const name = `${cname}=`;
        const coo = document.cookie.split(';').find(el => (el.trim()).startsWith(name));

        return coo ? coo.trim().slice(name.length) : '';
    }
    static del(cname){
        document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}
firstLoad();