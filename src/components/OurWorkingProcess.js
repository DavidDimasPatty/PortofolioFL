import React from "react";
import "../assets/our-working-process.css";

const OurWorkingProcess = () => {
    return (
        <>
            <div class="wave-owp wave-top-owp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
                    <defs>
                        <linearGradient id="gradient-top-owp" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#219ebc" />
                            <stop offset="50%" stop-color="#8ecae6" />
                            <stop offset="100%" stop-color="#023047" />
                        </linearGradient>
                    </defs>
                    <path d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,117.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        fill="url(#gradient-top-owp)" class="animated-path" fill-opacity="1"></path>
                </svg>
            </div>
            <div className="our-working-process-section pt-5 pb-5">
                <header>
                    {/* <p>Worked on all modern browers</p> */}
                    <h1>Our Working Process</h1>
                </header>

                <ul className="timeline">

                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Discovery</span>
                                <span className="time-wrapper"><span className="time">Step 1</span></span>
                            </div>
                            <div className="desc">We begin by understanding your needs and goals.</div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Planning</span>
                                <span className="time-wrapper"><span className="time">Step 2</span></span>
                            </div>
                            <div className="desc">We create a customized plan to meet your objectives.</div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Execution</span>
                                <span className="time-wrapper"><span className="time">Step 3</span></span>
                            </div>
                            <div className="desc">We execute the plan with precision and care, delivering results.</div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Review</span>
                                <span className="time-wrapper"><span className="time">Step 4</span></span>
                            </div>
                            <div className="desc">We review the results and ensure all goals are met.</div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Launch</span>
                                <span className="time-wrapper"><span className="time">Step 5</span></span>
                            </div>
                            <div className="desc">We launch the final product to the public or your team.</div>
                        </div>
                    </li>


                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="hexa"></span>
                                <span className="flag">Support</span>
                                <span className="time-wrapper"><span className="time">Step 6</span></span>
                            </div>
                            <div className="desc">We provide continuous support to ensure long-term success.</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default OurWorkingProcess;
