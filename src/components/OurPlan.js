import react, { useState } from "react";
import "../assets/ourplan.css"

const OurPlan = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div>
            <h1 align="center" className="mb-4 pricingTitle">
                Pricing
            </h1>
            <div className="col">
                <div className="wrapperContainer row d-flex justify-content-center align-items-center gap-2">

                    <div className={`card-container ${flipped ? '' : 'active'} col-md-3 d-flex justify-content-center align-items-center gap-2`}>
                        <div className="cardFlipper">
                            <div className="customCard">
                                <div className="customCardHeader">
                                    <div className="wrapperIconPrice">
                                        <i className="bi bi-send"></i>
                                    </div>
                                    <div className="mt-5">Regular</div>
                                </div>
                                <div className="customCardBody row justify-content-center align-items-center">
                                    <div className="price" align="center">
                                        Rp. 1.000.000
                                    </div>
                                    <div className="classLimit mb-2">

                                    </div>
                                    <div className="row mt-2 d-flex" align="center">
                                        <ul align="start" className="ms-3 listCardPrice">
                                            <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-check2 correctPart" /> Free VPS</li>
                                            <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-x incorrectPart" /> Free Domain</li>
                                            <li className="partAddUp">Free 2x Maintain</li>
                                            <li className="partAddUp">Free 4x Revisi</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="customCardFooter" align="center">
                                    <button className="startNowPlan" onClick={handleFlip}>Learn More</button>
                                </div>
                                <div className="floatingTextPlan">
                                    CHEAPER
                                </div>
                            </div>

                            <div className={`learnMore ${flipped ? '' : 'active'}`}>
                                <div className="contentLearnMore">
                                    <div className="wrapCloseBtn">
                                        <button className="closeBtnCrd" onClick={handleFlip}>X</button>
                                    </div>
                                    <h3>Regular Plan</h3>
                                    <div className="regBorder">

                                    </div>

                                    <div className="benefitCardSection">
                                        <h4>Benefit</h4>
                                        <ul>
                                            <li>Access to premium features at an affordable rate</li>
                                            <li>5x faster transactions and processing speeds</li>
                                            <li>Customizable dashboards to track your performance</li>
                                        </ul>
                                    </div>

                                    <p>Our Regular Plan gives you all the essential
                                        tools to manage your financial transactions
                                        efficiently. It is designed for users
                                        who need reliable service and enhanced
                                        features without breaking the bank.
                                        It’s ideal for individuals and small companies.</p>
                                    <div className="bridgeCardSection">

                                    </div>
                                    <div className="servicesCardSection">
                                        <h4>Included Services</h4>
                                        <ul>
                                            <li><strong>Web Development:</strong> Design and develop modern websites that meet your business goals.</li>
                                            <li><strong>App Development:</strong> Build high-performance applications for both Android and iOS platforms.</li>
                                            <li><strong>Machine Learning:</strong> Implement machine learning models to enhance decision-making and predictions.</li>
                                            <li><strong>Game Development:</strong> Create captivating games with stunning graphics and gameplay.</li>
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-center wrapEmailBtn">
                                        <button className="EmailBtn" onClick={handleFlip}>Arrange Meet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="containerOurPlan col-md-3 d-flex justify-content-center align-items-center gap-2">
                        <div className="customCard2">
                            <div className="customCardHeader">
                                <div className="wrapperIconPrice2">
                                    <i className="bi bi-airplane"></i>
                                </div>
                                <div className="mt-5">PREMIUM</div>
                            </div>
                            <div className="customCardBody row justify-content-center align-items-center">
                                <div className="price" align="center">
                                    Rp. 5.000.000
                                </div>
                                <div className="classLimit mb-2">

                                </div>
                                <div className="row mt-2 d-flex" align="center">
                                    <ul align="start" className="ms-3 listCardPrice">
                                        <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-check2 correctPart" /> Free VPS</li>
                                        <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-check2 correctPart" /> Free Domain</li>
                                        <li className="partAddUp">Free 5x Maintain</li>
                                        <li className="partAddUp">Free 10x Revisi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="customCardFooter" align="center">
                                <button className="startNowPlan">Learn More</button>
                            </div>
                            <div className="floatingTextPlan2">
                                STANDARD
                            </div>
                        </div>
                    </div>

                    <div className="containerOurPlan col-md-3 d-flex justify-content-center align-items-center gap-2">
                        <div className="customCard3">
                            <div className="customCardHeader">
                                <div className="wrapperIconPrice3">
                                    <i className="bi bi-rocket-takeoff"></i>
                                </div>
                                <div className="mt-5">SPECIAL</div>
                            </div>
                            <div className="customCardBody row justify-content-center align-items-center">
                                <div className="price" align="center">
                                    Rp. 15.000.000
                                </div>
                                <div className="classLimit mb-2">

                                </div>
                                <div className="row mt-2 d-flex" align="center">
                                    <ul align="start" className="ms-3 listCardPrice">
                                        <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-check2 correctPart" /> Free VPS</li>
                                        <li className="d-flex justify-content-start align-items-center gap-1"><i className="bi bi-check2 correctPart" /> Free Domain</li>
                                        <li className="partAddUp">Free 10x Maintain</li>
                                        <li className="partAddUp">Free 15x Revisi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="customCardFooter" align="center">
                                <button className="startNowPlan">Learn More</button>
                            </div>
                            <div className="floatingTextPlan3">
                                BEST OFFER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="wrapperContainer row d-flex justify-content-center align-items-center gap-2">

                </div>
            </div>
        </div>
    );
}

export default OurPlan;