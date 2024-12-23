import React, { useState } from "react";
import "../assets/home.css";
import arrowImage from "../assets/image/arrow.png"
import { motion } from "framer-motion";
import Footer from "./Footer";
import Floating from "./Floating";
import HeaderNav from "./HeaderNav";

const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
    }

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
                    <div className="contentHomeHeader">
                        <div className="row">
                            <div className="col">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div align="start">
                                        <h1>TriFusionCode</h1>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>

                <div className="contentHomeBody">
                    <div className="col">
                        <h3>tes123</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3> <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                        <h3>tes</h3>
                    </div>
                </div>
            </div>

            <Floating />
            <Footer />
        </div>
    );

}


export default Home;