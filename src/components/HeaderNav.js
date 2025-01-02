import React, { useEffect, useState } from "react";
import "../assets/header.css";
import logoTFC from "../assets/image/logoTFC.png"

const HeaderNav = ({ onCheckboxChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
   
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleChange = (event) => {
        onCheckboxChange(event.target.checked);
    };

    const handleScroll = () => {
        const scrollThresholdInVh = 50;
        const thresholdInPx = (scrollThresholdInVh / 100) * window.innerHeight;
        if (window.scrollY > thresholdInPx) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className={`logo${isScrolled ? '-scrolled' : ' '} d-flex justify-content-center align-items-center`} id="logo">
                <img src={logoTFC} width={"60px"} />
            </div>
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="#" className={`${isScrolled ? 'scrolled' : ' '}`}>
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`${isScrolled ? 'scrolled' : ' '}`}>
                            Layanan
                        </a>
                    </li>
                    <li>
                        <a href="#" className={`${isScrolled ? 'scrolled' : ' '}`} >
                            FAQ
                        </a>
                    </li>
                    <li>
                        <div class="toggle-button-cover">
                            <div class="button-cover">
                                <div class="butSWitch" id="button-10">
                                    <input type="checkbox" class="checkbox" onChange={handleChange}/>
                                    <div class="knobs">
                                        <span>EN</span>
                                    </div>
                                    <div class="layer"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        {isMenuOpen ? "Get Started" : <button className={`${isScrolled ? 'getStarted scrolled' : 'getStarted'}`}>Get Started</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderNav;