import React from "react";
import "../assets/our-working-process.css";

const OurWorkingProcess = () => {
    return (
        <>
            {/* Our Working Process Section */}
            <div className="our-working-process-section mt-5 pt-5 pb-5">
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
