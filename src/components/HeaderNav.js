import React, { useEffect, useState } from "react";
import "../assets/header.css";

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = ()=>{
        if(window.scrollY>50){
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
            <div className="logo">
                TriFusionCode
            </div>
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#" >                           
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            Layanan
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            Klien Kami
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            Kontak
                        </a>
                    </li>
                    <li>
                       {isMenuOpen?"Get Started":<button className="btn btn-info btn-xl">Get Started</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderNav;