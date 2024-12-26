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
                        <div className="col">
                            <div className="card card-btn h-100">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h5>Website</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurService;
