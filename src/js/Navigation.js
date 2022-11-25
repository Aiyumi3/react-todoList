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
                <p className="welcome">~WELCOME~</p>
            </div>

        </div>

)
}