import React, { useState } from "react";
import Ava from "./Ava";
import Content from "./Content";
//import "./style.scss";
////import "../css/style.css";
import "../css/MeshStyle.css";
import r from '../images/Rectangle.svg';
import r1 from '../images/Rectangle-1.svg';
import r2 from '../images/Rectangle-2.svg';
import r3 from '../images/Rectangle-3.svg';
import r4 from '../images/Rectangle-4.svg';
import r5 from '../images/Rectangle-5.svg';
import r6 from '../images/Rectangle-6.svg';
import r7 from '../images/Rectangle-7.svg';
import r8 from '../images/Rectangle-8.svg';
import vector from '../images/Vector 1.svg';
import arrowDown from '../images/arrowdown.png';
import neon1 from '../images/whiteNeon.svg';
import neon2 from '../images/blueNeon.svg';
import neon3 from '../images/pinkNeon.svg';
import neon4 from '../images/greenNeon.svg';
import spline from '../images/spline1.svg';
import spline2 from '../images/spline2.svg';

//
export default function Header() {
    const [style, setStyle] = useState("");
    const [style2, setStyle2] = useState("");
    const [style3, setStyle3] = useState("");
    const [style4, setStyle4] = useState("");
    const [style5, setStyle5] = useState("");
    const [style6, setStyle6] = useState("");

    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("up");
        setStyle2("spl");
        setStyle3("arrHide");
        setStyle4("headerTxtShow");
        setStyle5("locNaShow");
        setStyle6("conHidden");

    };



    return (
        <div className="flex-col-hstart-vstart clip-contents mesh">
            <div className="desktop" > <div className={style}>
                <img src={vector}  className="vector" alt="bg"  />
                <img src={r}  className="rect" alt="bg"  />
                <img src={r1}  className="rect1" alt="bg"  />
                <img src={r2}  className="rect2" alt="bg"  />
                <img src={r3}  className="rect3" alt="bg"  />
                <img src={r4}  className="rect4" alt="bg"  />
                <img src={r5}  className="rect5" alt="bg"  />
                <img src={r6}  className="rect6" alt="bg"  />
                <img src={r7}  className="rect7" alt="bg"  />
                <img src={r8}  className="rect8" alt="bg"  />
                <div className="welcome">
                    <p className="wOut" >~WELCOME~</p>
                </div>
                <div className="welcome2">
                    <p className="" >make your day more <br/> productive with TO DO</p>
                </div>
                <div className="spline"><div className={style2}>
                    <img src={spline}  className="spline1" alt="spline"  />
                    <img src={spline2}  className="spline2" alt="spline"  />
                </div></div>
                <div className="arrowDown" onClick={changeStyle} >
                    <img src={arrowDown} className={style3} alt="arrow down"  />
                </div>
                <div className="">
                    <img src={neon1}  className="neon1" alt="neon"  />
                    <img src={neon2}  className="neon2" alt="neon"  />
                    <img src={neon3}  className="neon3" alt="neon"  />
                    <img src={neon4}  className="neon4" alt="neon"  />
                </div>

            </div></div>
            <div className="headerTxt">
                <p className={style4}>T O D O<span className='headerSpan'>List</span></p>
            </div>
            <div className={style5}><div className="createAva">
                <Ava />
            </div></div>
            <div className=""><div className={style6}>
                <Content />
            </div></div>
        </div>

)
}
//<img src={src} className="avaPic" />
/*  <div className="createAva">
                <Ava /><Content />
            </div>
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
          setSrc(arrPic[random(0, arrPic.length - 1)]);
          function random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
         */