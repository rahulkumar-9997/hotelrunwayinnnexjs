import React from 'react'

const SatvikBhoj = () => {
    return (
        <div>
            <div
                className="banner-header section-padding valign bg-img bg-fixed"
                data-overlay-dark={6}
                // data-background="img/images/banner/1.webp"
                style={{ backgroundImage: 'url("img/images/restaurant/satvik.jpg")', backgroundPosition: "center", backgroundSize: "cover" }}
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
                            <h1>Satvik Bhoj</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="rooms-page section-padding" data-scroll-index={1}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            {/* <span>
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                    <i className="star-rating" />
                </span>
                <div className="section-subtitle">
                    Indulge in the Pure Essence of Satvik Bhoj
                </div>
                <div className='d-flex'>
                    <div className="section-title">Spiritual Vegetarian</div>
                </div> */}

                            <img src="img/images/restaurant/satvik.jpg" alt="Best Vegetarian Hotel In Varanasi - Hotel Runway Inn" className="mt-30 mb-30" />
                        </div>
                        <div className="col-md-6">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                            </span>
                            <div className="section-subtitle">
                                Indulge in the Pure Essence of Satvik Bhoj
                            </div>
                            <div className='d-flex'>
                                <div className="section-title">Spiritual Vegetarian</div>
                            </div>
                            <p className="mb-30">
                                Step into a realm of culinary bliss with our "Spiritual Vegetarian" dining experience, meticulously curated for those seeking a deeper connection with their food. Our menu transcends the ordinary by excluding onion and garlic, ensuring that each dish is not just a meal but a spiritual journey.
                            </p>
                            <p className="mb-30">
                                Delight in the simplicity and authenticity of our homemade flavors, crafted with care to nourish both body and soul. Our Satvik Bhoj embodies the essence of purity, offering a symphony of flavors that dance on your palate. Every bite is a revelation, a testament to the artistry and dedication we put into every dish.
                            </p>
                            <p className="mb-30">
                                Join us on this gastronomic adventure, where food is not just sustenance but a gateway to a higher culinary experience.
                            </p>
                            <h6>Hours</h6>
                            <ul className="list-unstyled page-list mb-30">
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="ti-time" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="ti-time" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="page-list-icon">
                                        {" "}
                                        <span className="ti-time" />{" "}
                                    </div>
                                    <div className="page-list-text">
                                        <p>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SatvikBhoj
