
import React from 'react'
import Link from 'next/link';
import { scrollToTop } from '@/helper/scrollToTop';
// import Map from './Map'

const Footer = () => {

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth' 
    //     });
    // };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-column footer-about">
                                {/* <h3 className="footer-title">
                       
                    </h3> */}
                                <img src="img/runnway.png" alt="Hotel Runway Logo" style={{ width: "55px" }} />
                                <p className="footer-about-text">
                                    We are the only Hotel Option at Varanasi Airport for frequent
                                    travelers who wish to stay overnite and catch Flight to there
                                    Destination from Varanasi and vice-versa.
                                </p>
                                <div className="footer-about-social-list">
                                    <Link href="https://www.instagram.com/hotel_runway_inn/?igsh=cng5czlmMXd5am84&utm_source=qr">
                                        <i className="ti-instagram" />
                                    </Link>
                                    <Link href="https://www.facebook.com/hotelrunwayinn?mibextid=ibOpuV">
                                        <i className="ti-facebook" />
                                    </Link>

                                    <Link href='https://wa.me/9305804900'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-3 offset-md-1"> */}
                        <div className="col-md-2 ">
                            <div className="footer-column footer-explore clearfix">
                                <h3 className="footer-title">Explore</h3>
                                <ul className="footer-explore-list list-unstyled">
                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/Room">Rooms &amp; Suites</Link>
                                    </li>
                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/Banquet"> Banquets</Link>
                                    </li>
                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/varanasi-hotel-airport-gallery"> Gallery</Link>
                                    </li>
                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/Restaurant">Dining</Link>
                                    </li>

                                    <li className='link' onClick={scrollToTop}>
                                        <Link href="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-column footer-contact">
                                <h3 className="footer-title">Contact</h3>
                                <p className="footer-contact-text">
                                    16 GH , lal bahadur shastri international airport,
                                    <br />
                                    Babatpur, Varanasi - 221006
                                </p>
                                <div className="footer-contact-info">
                                    {/* <p className="footer-contact-phone">
                            <span className="flaticon-call me-2" /> 
                            <a href="tel:9305804900"> 9305804900</a>
                        </p> */}
                                    <p className="footer-contact-phone">
                                        <span className="flaticon-call" /> +91 542-2622384, 2623100
                                    </p>
                                    <p className="footer-contact-mail"><a href="mailto:info@luxuryhotel.com">info@hotelrunwayinn.com</a></p>
                                    <p className="footer-contact-mail"><a href="mailto:booking.runwayInn@gmail.com">bookings.runwayinn@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-column footer-contact">
                                <iframe
                                    title="myFrame"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6290842032035!2d82.8534104744507!3d25.450661321389518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd5ae98d33961%3A0xe0a6882ef87ef5a7!2sLal%20Bahadur%20Shastri%20International%20Airport%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1709972890242!5m2!1sen!2sin"
                                    width="100%"
                                    // height="450"
                                    height="350"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-bottom-inner">
                                <p className="footer-bottom-copy-right">
                                    © Copyright 2024 by <Link href="/">Semicolon Solution</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
