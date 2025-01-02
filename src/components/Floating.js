import React, { useEffect, useState } from "react";
import gmail from "../assets/image/gmail.png"
import whatsapp from "../assets/image/whatsapp.png"
import arrowDown from "../assets/image/arrowDown.png"
import "../assets/floating.css";

const Floating = () => {
    const [isDown, setIsDown] = useState(true);

    const handleScroll = () => {
        const scrollThresholdInVh = 50;
        const thresholdInPx = (scrollThresholdInVh / 100) * window.innerHeight;
        if (window.scrollY > thresholdInPx) {
            setIsDown(false);
        }
        else {
            setIsDown(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <div className="logoFloat">
            <div className="logo-circ">
                <img src={gmail} className="imgLogo" />
            </div>
            <div className="logo-circ">
                <img src={whatsapp} className="imgLogo" />
            </div>
            <div className={`logo-circ rowUpDiv ${isDown?'':'active'}`}>
                <a href="#"><img src={arrowDown} className="rowUp" /></a>
            </div>
        </div>
    );
}


export default Floating;