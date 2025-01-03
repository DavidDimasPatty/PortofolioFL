import React, { useRef, useEffect, useState } from "react";
import "../assets/home.css";
import arrowImage from "../assets/image/arrow.png"
import Footer from "./Footer";
import Floating from "./Floating";
import HeaderNav from "./HeaderNav";
import OurService from "./OurService";
import OurPlan from "./OurPlan";
import OurWorkingProcess from "./OurWorkingProcess";
import WhyTfc from "./WhyTfc";
import FaQ from "./FaQ";
import imageBanner from "../assets/image/imgBannerPure.png";
import imageWebsite from "../assets/image/website.png";
import imageDekstop from "../assets/image/desktop.png";
import Slider from "react-slick";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Marquee from "react-fast-marquee";
const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [lastClickTime, setLastClickTime] = useState(Date.now());

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
    }

    const handleCheckboxChange = (checked) => {
        setIsChecked(checked);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            toggleFront();
        }, 3000);

        return () => clearTimeout(timer);
    }, [lastClickTime]);

    return (
        <div className="wrapper-all">
            <HeaderNav onCheckboxChange={handleCheckboxChange} />
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
                                <h1>{isChecked ? 'Bikin Aplikasi Murah dan Terpercaya?' : 'Build Cheap and Trusted Application?'}</h1>
                            </div>

                            <div className="row-md-5 mb-5 header-text2">
                                <h1>{isChecked ? 'Gass Aja Disini!!!' : 'We Can Provide That!!'}</h1>
                            </div>

                            <div className="row-md-5 d-flex justify-content-start align-items-center gap-5">
                                <button className="btn btn-dark button-contact" onClick={()=>window.location.href="#footer"}>Contact Us!</button>
                                <button className="btn btn-dark button-plan" onClick={()=>window.location.href="#plan"}><span>See Our Plan</span></button>
                            </div>

                        </div>
                        <div className="col">
                            <Carousel
                                showArrows={false}
                                showIndicators={false}
                                showStatus={false}
                                axis={"horizontal"}
                                autoPlay={true}
                                interval={3000}
                                infiniteLoop={true}
                                showThumbs={false}
                                width={"15vw"}
                            >
                                <div className="imageCarrousel">
                                    <img src={imageBanner} />
                                </div>
                                <div className="imageCarrousel">
                                    <img src={imageWebsite} />
                                </div>
                                <div className="imageCarrousel">
                                    <img src={imageDekstop} />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>


                <div className="bridgeBody d-flex justify-content-center align-items-center">
                    <div className="contentBridge  d-flex justify-content-center align-items-center gap-3">
                        <Marquee speed={100} pauseOnHover={true}>
                            <div className="d-flex gap-5">
                                <h2>Website Development</h2>
                                <h2>App Development</h2>
                                <h2>Desktop Development</h2>
                                <h2 className="me-5">Security App</h2>
                            </div>
                        </Marquee>
                    </div>
                </div>

                <div className="contentHomeBody">
                    <div className="col">
                        <div id="ourService" />
                        <OurService />
                        <WhyTfc />
                        <OurPlan />
                        <div id="tentangKami" />
                        <OurWorkingProcess />
                        <div id="FAQ" />
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