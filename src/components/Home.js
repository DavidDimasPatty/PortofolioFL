import React, { useRef, useEffect, useState } from "react";
import "../assets/home.css";
import arrowImage from "../assets/image/arrow.png"
import Footer from "./Footer";
import Floating from "./Floating";
import HeaderNav from "./HeaderNav";
import OurService from "./OurService";
import OurWorkingProcess from "./OurWorkingProcess";
import WhyTfc from "./WhyTfc";
import FaQ from "./FaQ";
import imageBanner from "../assets/image/imgBannerPure.png"
import Slider from "react-slick";

const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    let animationFrameId = null;

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
    }

    useEffect(() => {
        let startPos = 0;
        const speed = 4;

        const animate = () => {
            if (textRef.current && containerRef.current) {
                const textWidth = textRef.current.offsetWidth / 2;
                startPos -= speed;
                if (startPos <= -textWidth) {
                    startPos += textWidth;
                }

                textRef.current.style.transform = `translateX(${startPos}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <div className="wrapper-all">
            <HeaderNav />
            <div className={`frontWelcome ${frontWelcome ? "active" : "hidden"}`}>
                <div className="d-flex frontContent align-items-center justify-content-around">
                    <div className="row align-items-center justify-content-center content-left-front">
                        <div className="row">
                            <h3 className="nameFront">TriFusionCode</h3>
                            <small className="descFront">Make your applications come true!</small>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end  align-items-center content-right-front">
                        <a onClick={toggleFront}><img src={arrowImage} id="arrowImage" /></a>
                    </div>
                </div>
            </div>

            <div className="mainHome">
                <div className="homeHeader">
                    <div className="contentHomeHeader row d-flex justify-content-center align-items-center">
                        <div className="col justify-content-center align-items-center p-5">

                            <div className="row-md-6 mb-3 text-nowrap header-text1">
                                <h1>Bikin Aplikasi Murah dan Terpercaya?</h1>
                            </div>

                            <div className="row-md-5 mb-5 header-text2">
                                <h1>Gass Aja Disini!!!</h1>
                            </div>

                            <div className="row-md-5 d-flex justify-content-start align-items-center gap-5">
                                <button className="btn btn-dark button-contact">Contact Us!</button>
                                <button className="btn btn-dark button-plan"><span>See Our Plan</span></button>
                            </div>

                        </div>
                        <div className="col">
                            <img src={imageBanner} className="imgHeader" />
                        </div>
                    </div>


                </div>
                <div className="bridgeBody">
                    <div className="contentBridge" ref={containerRef}>
                        <div className="textBridge" ref={textRef}>
                            <h2>Website Development</h2>
                            <h2>App Development</h2>
                            <h2>Desktop Development</h2>
                            <h2>Security App</h2>
                            <h2>Website Development</h2>
                            <h2>App Development</h2>
                            <h2>Desktop Development</h2>
                            <h2>Security App</h2>
                        </div>
                    </div>
                </div>

                <div className="contentHomeBody">
                    <div className="col">
                        <OurService />
                        <WhyTfc />
                        <OurWorkingProcess />
                        <FaQ />
                    </div>
                </div>
            </div>

            <Floating />
            <Footer />
        </div>
    );

}


export default Home;