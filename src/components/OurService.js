import React from "react";
import "../assets/our-service.css";
import websiteImage from "../assets/image/our-service-website.jpg"
import mobileAppImage from "../assets/image/our-service-mobile-app.jpg"
import machineLearningImage from "../assets/image/our-service-machine-learning.jpg"

const services = [
    {
        title: "Website",
        description: "Develop responsive and kjhjkh jkh kj hjkhjkh jkhjk hkjh jkh jkh jkh jk hjk hjkhj hkj hkjh kscalable websites tailored to your needs.",
        image: websiteImage
    },
    {
        title: "Mobile App",
        description: "Build user-friendly mobile apps for Android and iOS platforms.",
        image: mobileAppImage
    },
    {
        title: "Mobile App",
        description: "Build user-friendly mobile apps for Android and iOS platforms.",
        image: mobileAppImage
    },
    {
        title: "Mobile App",
        description: "Build user-friendly mobile apps for Android and iOS platforms.",
        image: mobileAppImage
    },
    {
        title: "Mobile App",
        description: "Build user-friendly mobile apps for Android and iOS platforms.",
        image: mobileAppImage
    },
    {
        title: "Machine Learning",
        description: "Implement intelligent systems using advanced machine learning techniques.",
        image: machineLearningImage
    }
];

const OurService = () => {
    return (
        <>
            <div className="our-service-section pb-5">
                <h2 align="center" className="mb-5 pb-3">Our Services</h2>
                <div className="content-service d-flex justify-content-center align-items-center">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5" style={{ width: "100%" }}>
                        {services.map((service, index) => (
                            <div key={index} className="col d-flex justify-content-center align-items-center">
                                <div className="card card-service" style={{ backgroundImage: `url(${service.image})` }}>
                                    <img
                                        src={service.image}
                                        className="card-img-top"
                                        alt={`${service.title} image`}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color:'#023047' }}>{service.title}</h5>
                                        <p className="card-text" style={{ color:'#023047' }}>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurService;
