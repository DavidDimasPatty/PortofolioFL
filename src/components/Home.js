import React, { useState } from "react";
import "../assets/home.css";
import arrowImage from "../assets/image/arrow.png"
import { motion } from "framer-motion";
const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
    }

    return (
        <div>
            <div className={`frontWelcome ${frontWelcome ? "active" : "hidden"}`}>
                <div className="d-flex frontContent align-items-center justify-content-around">
                    <div className="row align-items-end content-left-front ms-4">
                        <div className="row">
                            <h1>TriFusionCode</h1>
                        </div>
                        <div className="row w-50">
                            <small>We can help you build your dream application!</small>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end  align-items-center content-right-front">
                        <a onClick={toggleFront}><img src={arrowImage} id="arrowImage" /></a>
                    </div>
                </div>
            </div>

            <div className="mainHome">
                <div className="homeHeader">
                    <div className="contentHomeHeader">
                        <div className="row">
                            <div className="col">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div align="center">
                                        <h1>TriSolutionCode</h1>
                                        <div align="center" className="col-md-7 d-flex  justify-content-center align-items-center gap-3 mt-2">
                                            <motion.button
                                                className="btn btn-light"
                                                whileHover={{
                                                    scale: 1.1,          // Membesar saat hover
                                                    backgroundColor: "#f0f0f0", // Warna latar berubah
                                                    color: "#000",       // Warna teks berubah
                                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Tambah bayangan
                                                }}
                                                whileTap={{
                                                    scale: 0.95,         // Mengecil sedikit saat klik
                                                    backgroundColor: "#ddd", // Warna latar berubah
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                Our Portfolio
                                            </motion.button>

                                            <motion.button
                                                className="btn btn-light"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "#e0e0e0",
                                                    color: "#333",
                                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                                }}
                                                whileTap={{
                                                    scale: 0.95,
                                                    backgroundColor: "#ccc",
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                Contact Us!
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col image-header-container">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeBody">
                    <div className="contentBody">
                        <div className="row pt-5" align="center">
                            <h2>Our Services</h2>
                            <small><u>Snippet of what we can do!</u></small>
                        </div>
                        <div className="content-service d-flex justify-content-center align-items-center">
                            <div className="row-md-5 d-flex justify-content-center align-items-center gap-3 mt-3">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 align="center">Website</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 align="center">Mobile App</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 align="center">Machine Learning</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row pt-5" align="center">
                            <h2>Our Portofolio</h2>
                            <small><u>Snippet of what we can do!</u></small>
                        </div>

                        <div className="row pt-5" align="center">
                            <h2>Our Team</h2>
                            <small><u>Snippet of what we can do!</u></small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}


export default Home;