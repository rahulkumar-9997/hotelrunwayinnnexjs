import React from 'react'


const Banner = () => {
    return (
        <div>
            <header className="header slider-fade front">
                <div id="carouselExampleCaptions" class="carousel slide slider-fade" data-bs-ride="carousel" data-bs-touch="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner ">
                        <div class="carousel-item item1 active" data-overlay-dark="6">
                            <img src="img/slider/banner-4.webp" class="d-block w-100" alt="..." />
                            <div className="v-middle caption ">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 offset-md-1 txtCenter">
                                            <span className='mobtop'>
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                            </span>
                                            <h4>Luxury Airport Hotel </h4>
                                            <h1>Enjoy a Luxury Experience</h1>
                                            <div className="butn-light mt-30 ">
                                                {" "}
                                                <a href="/Room" data-scroll-nav={1}>
                                                    <span style={{ color: "#D4B16D" }}>Rooms &amp; Suites</span>
                                                </a>{" "}
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12 colsm-12 mt-4 text-center'>
                                            <a href="https://www.tripadvisor.in/Hotel_Review-g21257815-d17397594-Reviews-Hotel_Runway_Inn-Babatpur_Varanasi_District_Uttar_Pradesh.html" target='blank' className='me-4'>
                                                <img src="./img/tripadvison.png" alt="" className='rateus' title="Rate us on TripAdvisor" style={{ marginTop: "10px !important" }} />
                                            </a>
                                            <a href="https://g.page/HotelRunwayInn?gm" target='blank'>
                                                <img src="./img/mybusiness.png" alt="" className='rateus' title="Rate us on Google" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item item1" data-overlay-dark="6">
                            <img src="img/slider/19.webp" class="d-block w-100" alt="..." />
                            <div className="v-middle caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 offset-md-1 txtCenter">
                                            <span className='mobtop'>
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                            </span>
                                            <h4>Unique Place to Relax &amp; Enjoy</h4>
                                            <h1>The Perfect Base For You</h1>
                                            <div className="butn-light mt-30">
                                                {" "}
                                                <a href="/" data-scroll-nav={1}>
                                                    <span style={{ color: "#D4B16D" }}>Rooms &amp; Suites</span>
                                                </a>{" "}
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12 colsm-12 mt-4 text-center'>
                                            <a href="https://www.tripadvisor.in/Hotel_Review-g21257815-d17397594-Reviews-Hotel_Runway_Inn-Babatpur_Varanasi_District_Uttar_Pradesh.html" target='blank' className='me-4'>
                                                <img src="./img/tripadvison.png" alt="" className='rateus' title="Rate us on TripAdvisor" style={{ marginTop: "10px !important" }} />
                                            </a>
                                            <a href="https://g.page/HotelRunwayInn?gm" target='blank'>
                                                <img src="./img/mybusiness.png" alt="" className='rateus' title="Rate us on Google" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item item1" data-overlay-dark="6">
                            <img src="img/slider/rooftop.webp" class="d-block w-100" alt="..." />
                            <div className="v-middle caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 offset-md-1 txtCenter">
                                            <span className='mobtop'>
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                                <i className="star-rating" />
                                            </span>
                                            <h4>The Ultimate Luxury Experience</h4>
                                            <h1>Luxury Boutique Airport Hotel</h1>
                                            <div className="butn-light mt-30 ">
                                                {" "}
                                                <a href="/" data-scroll-nav={1}>
                                                    <span style={{ color: "#D4B16D" }}>Rooms &amp; Suites</span>
                                                </a>{" "}
                                            </div>
                                        </div>
                                        <div className='col-lg-12 col-md-12 colsm-12 mt-4 text-center'>
                                            <a href="https://www.tripadvisor.in/Hotel_Review-g21257815-d17397594-Reviews-Hotel_Runway_Inn-Babatpur_Varanasi_District_Uttar_Pradesh.html" target='blank' className='me-4'>
                                                <img src="./img/tripadvison.png" alt="" className='rateus' title="Rate us on TripAdvisor" style={{ marginTop: "10px !important" }} />
                                            </a>
                                            <a href="https://g.page/HotelRunwayInn?gm" target='blank'>
                                                <img src="./img/mybusiness.png" alt="" className='rateus' title="Rate us on Google" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev indicatorBtn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next indicatorBtn" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="reservation">
                    <a href="tel:93058 04900">
                        <div className="icon d-flex justify-content-center align-items-center">
                            <i className="flaticon-call" />
                        </div>
                        <div className="call">
                            <span>93058 04900</span> <br />
                            Reservation
                        </div>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default Banner