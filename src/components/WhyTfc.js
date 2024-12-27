import React, { useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../assets/why-tfc.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhyTfc = () => {
    const sliderRef = useRef(null); // Ref untuk Slider component
    const [resizeTimeout, setResizeTimeout] = useState(null); // Menyimpan timeout untuk resize

    // Fungsi untuk mengatur tinggi card
    const adjustCardHeight = () => {
        const cards = document.querySelectorAll(".card-why");
        let maxHeight = 0;
        cards.forEach((card) => {
            card.style.height = "auto"; // Resetting height
            maxHeight = Math.max(maxHeight, card.offsetHeight); // Menemukan card tertinggi
        });
        cards.forEach((card) => {
            card.style.height = `${maxHeight}px`; // Set semua card ke tinggi yang sama
        });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "8",
        // cssEase: "linear",
        afterChange: adjustCardHeight, // Memanggil fungsi untuk update tinggi card setelah slide berubah
    };

    // Gunakan useLayoutEffect untuk memastikan perubahan tinggi card terjadi saat render
    useLayoutEffect(() => {
        adjustCardHeight(); // Update tinggi card saat pertama kali dimuat

        const handleResize = () => {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout); // Hapus timeout sebelumnya
            }
            setResizeTimeout(setTimeout(adjustCardHeight, 200)); // Menunggu 200ms setelah resize selesai
        };

        window.addEventListener("resize", handleResize); // Menyesuaikan tinggi saat resize

        return () => {
            window.removeEventListener("resize", handleResize); // Hapus listener saat unmount
            if (resizeTimeout) {
                clearTimeout(resizeTimeout); // Bersihkan timeout saat komponen di-unmount
            }
        };
    }, [resizeTimeout]); // Menambahkan dependency pada resizeTimeout

    return (
        <div className="why-choose-us-section pt-5">
            <div class="wave wave-top">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="100%" stop-color="#8ecae6" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,117.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        fill="url(#gradient)"
                        stroke="#8ecae6" /* Warna stroke yang sama dengan gradien */
                        stroke-width="1"
                        class="animated-path">
                    </path>
                </svg>
            </div>

            <div className="row">
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <h2 align="center" className="text-white">Mengapa Harus Pilih Jasa Kami?</h2>
                </div>
                <div className="col-12 col-md-8 ps-5 pe-5">
                    <div className="content-why mt-3">
                        <Slider {...settings} ref={sliderRef} className="custom-slick">
                            <div className="card mx-2 card-why">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Profesional</h5>
                                    <p className="card-text">Kami memiliki tim dengan pengalaman dan keahlian di bidang teknologi.</p>
                                </div>
                            </div>
                            <div className="card mx-2 card-why">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Solusi Custom</h5>
                                    <p className="card-text">Kami menawarkan solusi yang dirancang sesuai dengan kebutuhan Anda.</p>
                                </div>
                            </div>
                            <div className="card mx-2 card-why">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Efisiensi Biaya</h5>
                                    <p className="card-text">Kami memberikan hasil terbaik dengan harga yang kompetitif.</p>
                                </div>
                            </div>
                            <div className="card mx-2 card-why">
                                <div className="card-body text-center">
                                    <h5 className="card-title">Support 24/7</h5>
                                    <p className="card-text">Kami selalu siap membantu Anda kapan pun diperlukan.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div class="wave wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="100%" stop-color="#8ecae6" />
                        </linearGradient>
                    </defs>
                    <path d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,117.3C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        fill="url(#gradient)" class="animated-path"></path>
                </svg>
            </div>

        </div>
    );
};

export default WhyTfc;
