import react,{useState} from "react";
import "../assets/ourplan.css"

const OurPlan = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
      setFlipped(!flipped); // Membalikkan status flip
    };
    
    return (
        <div>
            <h1 align="center" className="mb-4 pricingTitle">
                Pricing
            </h1>
            <div className="col">
                <div className="wrapperContainer row d-flex justify-content-center align-items-center gap-2">
                    <div className="containerOurPlan col-md-3">
                        <div className={`customCard ${flipped ? 'flipped' : ''}`}>
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
                        <div className="learnMore" id="learnMore1">
                            <h3>Learn More Content</h3>
                            <p>This is the content that shows up when the card is flipped.</p>
                        </div>
                    </div>
                    <div className="containerOurPlan col-md-3 d-flex justify-content-center align-items-center">
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
                    <div className="containerOurPlan col-md-3 d-flex justify-content-center align-items-center">
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
        </div>
    );
}

export default OurPlan;