import React from 'react';
import "../assets/programming-language.css";

const ProgrammingLanguage = () => {
    return (
        <>
            <div className="programming-language-section">
                <header>
                    <h1>Kagak Ngarti Judul nya</h1>
                </header>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain" />
                        <div className="text-overlay">Website</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" />
                        <div className="text-overlay">Mobile Apps</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees" />
                        <div className="text-overlay">Machine Learning</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky" />
                        <div className="text-overlay">Testing App</div>
                    </div>
                    <div className="gallery-item">
                        <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape" />
                        <div className="text-overlay">ERP</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgrammingLanguage;
