import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';

const Contact = () => {
    return (
        <>
            <div
                className="banner-header section-padding valign bg-img bg-fixed"
                data-overlay-dark={6}
                style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url('img/images/exterior/IMG_1058-2.jpg')" }}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left caption mt-90">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                {/* <i className="star-rating" /> */}
                            </span>
                            <h5>Get in touch</h5>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact */}
            <section className="contact section-padding">
                <div className="container">
                    <div className="row mb-90">
                        <div className="col-md-6 mb-60">
                            <h3>The Runway Inn Airport Boutique Hotel</h3>
                            <p>
                                Hotel Runway Inn Whether you have inquiries about
                                reservations, special accommodations, or simply want to discuss how
                                we can make your stay extraordinary, our team is here to assist.
                                Connect with us via the provided contact details, and let us turn
                                your visit into an unforgettable experience. Your comfort is our
                                priority, and we look forward to hearing from you soon.
                            </p>
                            <div className="reservations mb-30">
                                <div className="icon">
                                    <span className="flaticon-call" />
                                </div>
                                <div className="text">
                                    <p>Reservation</p> <a href="tel:+919305804900">+91 93058 04900</a>
                                </div>
                            </div>
                            <div className="reservations mb-30">
                                <div className="icon">
                                    <span className="flaticon-call" />
                                </div>
                                <div className="text">
                                    <p>Manager Ops : Mr. Rahil abbas</p> <a href="tel:+919415226003">+91 94152 26003</a>
                                </div>
                            </div>
                            <div className="reservations mb-30">
                                <div className="icon">
                                    <span className="flaticon-envelope" />
                                </div>
                                <div className="text">
                                    <p>Email Info</p>{" "}
                                    <a href="mailto:info@luxuryhotel.com">info@hotelrunwayinn.com</a>
                                </div>
                            </div>
                            {/* <div class="reservations">
                    <div class="icon"><span class="flaticon-location-pin"></span></div>
                    <div class="text">
                        <p>Address</p> 1616 Broadway NY, New York 10001
                        <br>United States of America
                    </div>
                </div> */}
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Contact;


export const metadata = {
    title: "The Runway Inn Airport Boutique Hotel.",
    description: 'Hotel Runway Inn Whether you have inquiries about reservations, special accommodations, or simply want to discuss how we can make your stay extraordinary, our team is here to assist.',
    link: "https://www.hotelrunwayinn.com",
}