import react from "react";
import "../assets/footer.css";
import logoTFC from "../assets/image/logoTFC.png"
import Marquee from "react-fast-marquee";
const Footer = () => {
    const phoneNumber = "62812124";
    const defaultMessage = "Halo, saya tertarik dengan layanan Anda.";
    const openWhatsApp = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}` // Aplikasi WhatsApp
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`; // WhatsApp Web

        window.open(url, "_blank");
    };
    return (
        <div className="footer" id="footer">
            <div className="col d-flex  pb-5">
                <div className="row footerBridge mt-5 gap-4">
                    <div className="col-md-3 d-flex  align-items-center imgFooterWrapper">
                        <img src={logoTFC} className="imgFooter" />
                    </div>
                    
                    <div className="col-md-4 d-flex justify-content-center align-items-center wrapperwordBottom">
                        <div className="row wordBottom">
                            <h1 className="mb-4 text-center">Make Your Dream Application Comes True!</h1>
                            <h5 className="mb-4">Kami percaya semua orang berhak mendapatkan cita-citanya terwujud. Kami berusaha ada disitu untuk membantu anda.</h5>
                            <div className="wrapperCall" >
                                <button className="btn btn-light buttonCall" onClick={openWhatsApp}>Hubungi Kami</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex corps align-items-center">
                        <h1>
                            &copy;TriFusionCode
                        </h1>
                    </div>
                </div>
            </div>

            <div className="row footerrow nb-5">
                <div>&nbsp;</div>
            </div>

            <div className="row footerClose gap-4">
                <div className="col-md-3 footerCloseC1">
                    <div className="header1Footer">GENERAL INFORMATIONS</div>
                    <div className="col">
                        <button className="buttonFooterLink" onClick={()=>window.location.href="#ourService"}>Our Service</button>
                        <button className="buttonFooterLink"  onClick={()=>window.location.href="#whyTFC"}>Why Us?</button>
                        <button className="buttonFooterLink"  onClick={()=>window.location.href="#tentangKami"}>Our Working Process</button>
                        <button className="buttonFooterLink"  onClick={()=>window.location.href="#plan"}>Our Plan</button>
                    </div>
                </div>
                <div className="col-md-4 footerCloseC2">
                    <div className="header1Footer">FOLLOW TFC ON SOCIAL MEDIA</div>
                    <div className="col">
                        <button className="buttonFooterLink">INSTAGRAM</button>
                        <button className="buttonFooterLink">FACEBOOK</button>
                        <button className="buttonFooterLink">LINKEDIN</button>
                        <button className="buttonFooterLink">TWITTER</button>
                    </div>
                </div>
                <div className="col-md-4">
                    TriFusionCode is a cutting-edge IT solutions provider dedicated to empowering businesses with innovative technology services.
                    Our mission is to bridge the gap between business challenges and digital excellence through tailored, efficient, and scalable solutions.
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