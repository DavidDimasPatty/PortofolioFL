import React, { useState } from "react";
import "../assets/faq.css";

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
            <h2 className="faq-title" align="center">Frequently Asked Questions (FAQ)</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div
                            className="faq-question"
                            onClick={() => handleClick(index)}
                        >
                            <span>{item.question}</span>
                            <span className="faq-icon">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        <div
                            className={`faq-answer ${
                                activeIndex === index ? "open" : ""
                            }`}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaQ;
