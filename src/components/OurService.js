import React from "react";
import "../assets/our-service.css";
import websiteImage from "../assets/image/our-service-website.jpg"
import mobileAppImage from "../assets/image/our-service-mobile-app.jpg"
import machineLearningImage from "../assets/image/our-service-machine-learning.jpg"

const services = [
    {
        title: "Website",
        description: "Develop responsive and scalable websites tailored to your needs.",
        image: websiteImage
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
            <div className="our-service-section pt-5">
                <h2 align="center" className="mb-5 pb-5">Our Services</h2>
                <div className="content-service d-flex justify-content-center align-items-center">
                    <div className="row row-cols-1 row-cols-md-3 g-4" style={{ width: "80%" }}>
                        {services.map((service, index) => (
                            <div key={index} className="col d-flex justify-content-center align-items-center">
                                <div className="card card-service" style={{ backgroundImage: `url(${service.image})` }}>
                                    <img
                                        src={service.image}
                                        className="card-img-top"
                                        alt={`${service.title} image`}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description}</p>
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
