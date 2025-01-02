import react from "react";
import "../assets/footer.css";
import logoTFC from "../assets/image/logoTFC.png"
import Marquee from "react-fast-marquee";
const Footer = () => {

    return (
        <div className="footer">
            <div className="col d-flex justify-content-start pb-5">
                <div className="row footerBridge mt-5">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img src={logoTFC} className="imgFooter" />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="row">
                            <h1 className="w-75 mb-4">Make Your Dream Application Comes True!</h1>
                            <h5 className="w-75 mb-4">Kami percaya semua orang berhak mendapatkan cita-citanya terwujud. Kami berusaha ada disitu untuk membantu anda.</h5>
                            <h5 className="w-25 mb-4"></h5>
                            <div className="wrapperCall">
                                <button className="btn btn-light buttonCall">Hubungi Kami</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row footerrow">
                <div className="col-md-6 d-flex justify-content-start">
                    <h5><i className="bi bi-laptop text-white" /> We Help Your Dreams!</h5>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <a href="#"><h5>Our Service</h5></a>
                        <a href="#"><h5>Why Us?</h5></a>
                        <a href="#"><h5>Our Working Proccess</h5></a>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row">
                        <a href="#"><h5>Instagram</h5></a>
                        <a href="#"><h5>Twitter</h5></a>
                        <a href="#"><h5>Facebook</h5></a>
                        <a href="#"><h5>LinkedIn</h5></a>
                    </div>
                </div>

                <div className="col-md-2">
                    <div className="row">
                        <a href="#"><h5>FAQ</h5></a>
                        <a href="#"><h5>Contact</h5></a>
                    </div>
                </div>
            </div>

            <div className="row footerClose">
                <div className="col-md-6">
                    TriFusionCode &#169; 2024
                </div>
                <div className="col-md-2">
                    Our Section
                </div>
                <div className="col-md-2">
                    Our Media Sosial
                </div>
                <div className="col-md-2">
                    Help Center
                </div>
            </div>

            <div className="footerEnd d-flex justify-content-center align-items-center">
                <div className="borderSpaceEnd d-flex justify-content-center align-items-center gap-3">
                    <Marquee speed={100} pauseOnHover={true}>
                        <h5>Make Your Dreams Comes True!</h5>
                        <h5>Customize Your Web</h5>
                        <h5>Design Your Web</h5>
                        <h5>Build Website</h5>
                        <h5>Mobile App</h5>
                        <h5>Security Application</h5>
                        <h5>Dekstop Application</h5>
                    </Marquee>
                </div>
            </div>

        </div>
    );
}

export default Footer;