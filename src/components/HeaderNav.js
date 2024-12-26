import React, { useEffect, useState } from "react";
import "../assets/header.css";

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = ()=>{
        if(window.scrollY>450){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }

    },[]);
    
    return (
        <header className={`header ${isScrolled?'scrolled':''}`}>
            <div className="logo" id="logo">
                TriFusionCode
            </div>
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#" className={`${isScrolled?'scrolled':' '}`}>
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`${isScrolled?'scrolled':' '}`}>
                            Layanan
                        </a>
                    </li>
                    <li>
                        <a href="#"className={`${isScrolled?'scrolled':' '}`} >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`${isScrolled?'scrolled':' '}`}>
                            Kontak
                        </a>
                    </li>
                    <li>
                       {isMenuOpen?"Get Started":<button className="getStarted">Get Started</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderNav;