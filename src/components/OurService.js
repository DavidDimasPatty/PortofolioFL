import React from "react";
import "../assets/our-service.css";

const OurService = () => {
    return (
        <>
            {/* Our Service Section */}
            <div className="our-service-section pt-5">
                <h2 align="center" className="mb-4">Our Services</h2>
                <div className="content-service d-flex justify-content-center align-items-center">
                    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ width: "80%" }}>
                        <div className="col d-flex justify-content-center align-items-center">
                            <a class="btn">
                                <svg width="277" height="62">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stop-color="#023047" />
                                            <stop offset="50%" stop-color="#219ebc" />
                                            <stop offset="100%" stop-color="#8ecae6" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                                </svg>
                                <span>Website</span>
                            </a>
                        </div>

                        <div className="col d-flex justify-content-center align-items-center">
                            <a class="btn">
                                <svg width="277" height="62">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stop-color="#023047" />
                                            <stop offset="50%" stop-color="#219ebc" />
                                            <stop offset="100%" stop-color="#8ecae6" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                                </svg>
                                <span>Mobile App</span>
                            </a>
                        </div>

                        <div className="col d-flex justify-content-center align-items-center">
                            <a class="btn">
                                <svg width="277" height="62">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stop-color="#023047" />
                                            <stop offset="50%" stop-color="#219ebc" />
                                            <stop offset="100%" stop-color="#8ecae6" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                                </svg>
                                <span>Machine Learning</span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="col">
                                <div className="card card-btn h-100">
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <h5>Mobile App</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card card-btn h-100">
                                    <div className="card-body d-flex justify-content-center align-items-center">
                                        <h5>Machine Learning</h5>
                                    </div>
                                </div>
                            </div> */}
                </div>
            </div>
        </>
    );
};

export default OurService;
