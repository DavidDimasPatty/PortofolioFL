import React, { useState } from "react";
import gmail from "../assets/image/gmail.png"
import whatsapp from "../assets/image/whatsapp.png"
import arrowDown from "../assets/image/arrowDown.png"
import "../assets/floating.css";

const Floating = () => {
    const [isDown, setIsDown] = useState(false);

    return (
        <div className="logoFloat">
            <div className="logo-circ">
                <img src={gmail} className="imgLogo" />
            </div>
            <div className="logo-circ">
                <img src={whatsapp} className="imgLogo" />
            </div>
            <div className="logo-circ rowUpDiv">
                <img src={arrowDown} className="imgLogo rowUp" />
            </div>
        </div>
    );
}


export default Floating;