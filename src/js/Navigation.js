import React from "react";
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
    return (

        <div className="flex-col-hstart-vstart clip-contents mesh">
            <div className="desktop">
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
                <div className="spline">
                    <img src={spline}  className="spline1" alt="spline"  />
                    <img src={spline2}  className="spline2" alt="spline"  />
                </div>
                <div className="arrowDown">
                    <img src={arrowDown}  className="" alt="arrow down"  />
                </div>
                <div className="">
                    <img src={neon1}  className="neon1" alt="neon"  />
                    <img src={neon2}  className="neon2" alt="neon"  />
                    <img src={neon3}  className="neon3" alt="neon"  />
                    <img src={neon4}  className="neon4" alt="neon"  />
                </div>

            </div>

        </div>

)
}