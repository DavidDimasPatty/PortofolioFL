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

    const email = "example@example.com";
    const subject = "Ini adalah subjek default";
    const body = "Halo, ini adalah isi email yang telah diatur sebelumnya.";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const phoneNumber = "62812312";
    const defaultMessage = "Halo, saya tertarik dengan layanan Anda.";

    const openWhatsApp = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}` // Aplikasi WhatsApp
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`; // WhatsApp Web

        window.open(url, "_blank");
    };
    
    return (
        <div className="logoFloat">
            <div className="logo-circ">
                <a href={mailtoLink} target="_blank" rel="noopener noreferrer"><img src={gmail} className="imgLogo" /></a>
            </div>
            <div className="logo-circ">
                <a onClick={openWhatsApp}><img src={whatsapp} className="imgLogo" /></a>
            </div>
            <div className={`logo-circ rowUpDiv ${isDown ? '' : 'active'}`}>
                <a href="#"><img src={arrowDown} className="rowUp" /></a>
            </div>
        </div>
    );
}


export default Floating;