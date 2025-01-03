import React, { useState } from "react";
import "../assets/faq.css";
import image from "../assets/image/faq-image.png"

const FaQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What is your working process?",
            answer: "Our working process includes discovery, planning, execution, review, launch, and ongoing support."
        },
        {
            question: "How long does a typical project take?",
            answer: "The timeline depends on the project's scope, but we strive to complete projects efficiently while maintaining quality."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Yes, we offer continuous support to ensure the long-term success of your project."
        },
        {
            question: "Can I customize the process to suit my needs?",
            answer: "Absolutely! We tailor our approach to meet your specific requirements and goals."
        },
        {
            question: "What industries do you work with?",
            answer: "We work with a wide range of industries, including technology, retail, healthcare, and more."
        }
    ];

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <div className="faq-section">
            <div className="accordion">
                <div className="image-box">
                    <img src={image} alt="" />
                </div>
                <div className="accordion-text">
                    <div className="title">FAQ</div>
                    <ul className="faq-text">
                        {faqData.map((item, index) => (
                            <li key={index} onClick={() => handleClick(index)} className={`${activeIndex === index ? "showAnswer" : ""}`}>
                                <div className="question-arrow">
                                    <span className="question">{item.question}</span>
                                    <i className="bi bi-chevron-down arrow"></i>
                                </div>
                                <p>{item.answer}</p>
                                <span className="line"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FaQ;