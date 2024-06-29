import React from 'react'

const Banquet = () => {
    return (
        <div>

            <div
                className="banner-header section-padding valign bg-img "
                data-overlay-dark={6}
                style={{ backgroundPosition: "bottom", backgroundSize: "cover", backgroundImage: "url('img/images/banquet/IMG_2093.1.jpg')" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 caption mt-90">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                            </span>
                            <h5>Hotel Runway Inn</h5>
                            <h1>Banquet</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="services section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-0 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="img left">
                                <a href="/">
                                    <img src="img/images/banquet/IMG_2093.1.jpg" alt="MEHFIL - Hotel Runway Inn" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 bg-cream valign animate-box fadeInRight animated " data-animate-effect="fadeInRight">
                            <div className="content">
                                <div className="cont text-left">
                                    <div className="info">
                                        <h6>Banquet</h6>
                                    </div>
                                    <h4>MEHFIL</h4>
                                    <p>
                                        Looking for the perfect venue for your next official meeting, social gathering, or engagement? Our banquet section, located on the ground floor, offers a spacious and versatile setting for events with 70-100++ guests. With our attention to detail and commitment to excellence, we ensure that every event, whether it's an engagement, corporate meeting, interview, birthday, or kitty party, is a memorable success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-6 bg-cream p-0 order2 valign animate-box fadeInLeft animated"
                            data-animate-effect="fadeInLeft"
                        >
                            <div className="content">
                                <div className="cont text-left">
                                    <div className="info">
                                        <h6>Banquet</h6>
                                    </div>
                                    <h4> JALSA</h4>
                                    <p>
                                        Elevate your event experience at our banquet section, situated on the 3rd floor, offering a delightful ambiance and picturesque views. With flexible seating arrangements including theatre style, U-shape, cluster, and classroom, our venue can accommodate approximately 200+ guests. Centrally air-conditioned with lush green gardens and a rooftop swimming pool nearby, our venue is an ideal place for celebrations. Whether you're hosting a conference, seminar, or workshop, our versatile space and impeccable service ensure a successful and memorable event.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 p-0 order1 animate-box fadeInRight animated"
                            data-animate-effect="fadeInRight"
                        >
                            <div className="img">
                                <a href="/">
                                    <img src="img/images/banquet/1.1.webp" alt="JALSA - Hotel Runway Inn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banquet
export const metadata = {
    title: "Elegant Event Spaces at Hotel Runway Inn - Host Unforgettable Occasions.",
    description: 'Make your special occasions truly memorable at Hotel Runway Inn. Explore our versatile banquet facilities, perfect for weddings, conferences, and more, amidst the charming ambiance of Varanasi.',        
    link:"https://www.hotelrunwayinn.com",
}