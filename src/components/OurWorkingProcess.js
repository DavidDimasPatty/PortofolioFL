import React from "react";
import "../assets/our-working-process.css";

const OurWorkingProcess = () => {
    return (
        <>
            {/* Our Working Process Section */}
            <div className="our-working-process-section pt-5">
                <h2 align="center" className="mb-4">Our Working Process</h2>
                <div className="content-process d-flex justify-content-center align-items-center">
                    {/* Container untuk semua langkah */}
                    <div className="steps-container">
                        {/* Step 1 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 1: Discovery</h5>
                                    <p className="card-text text-center">We begin by understanding your needs and goals.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 2: Planning</h5>
                                    <p className="card-text text-center">We create a customized plan to meet your objectives.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 3: Execution</h5>
                                    <p className="card-text text-center">We execute the plan with precision and care, delivering results.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 4: Review</h5>
                                    <p className="card-text text-center">We review the results and ensure all goals are met.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 5: Launch</h5>
                                    <p className="card-text text-center">We launch the final product to the public or your team.</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="step-card">
                            <div className="card card-process">
                                <div className="card-body">
                                    <h5 align="center">Step 6: Support</h5>
                                    <p className="card-text text-center">We provide continuous support to ensure long-term success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurWorkingProcess;
