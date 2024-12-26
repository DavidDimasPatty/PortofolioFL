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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        centerPadding: "8",
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
            <h2 align="center">Mengapa Harus Pilih Jasa Kami?</h2>
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
    );
};

export default WhyTfc;
