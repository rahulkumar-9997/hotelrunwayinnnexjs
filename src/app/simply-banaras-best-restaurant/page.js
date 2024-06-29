import React from 'react'

const Baneras = () => {
    return (
        <div>
            <div
                className="banner-header section-padding valign bg-img bg-fixed"
                data-overlay-dark={6}
                style={{ backgroundImage: 'url("img/images/exterior/IMG_1058-2.jpg")', backgroundPosition: "center", backgroundSize: "cover" }}
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
                            <h1>Simply Benares</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="rooms-page section-padding" data-scroll-index={1}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                            </span>
                            <div className="section-subtitle">
                                Unforgettable Cuisine while Dining
                            </div>
                            <div className='d-flex'>
                                <div className="section-title">Simply Benares</div>
                                <img src="img/images/restaurant/banaras.png" alt="Best Restaurant near Varanasi Airport" className="ms-5 w-25 h-25 wid" />
                            </div>

                            <img src="img/images/restaurant/1.jpg" alt="Best Restaurant near Varanasi Airport" className="mt-30 mb-30" />
                        </div>
                        <div className="col-md-6">
                            <p className="mb-30">
                                Experience the best of multicuisine dining at our restaurant, located just outside Varanasi Airport. With a capacity of 55-60 covers, our full-day dining establishment offers a fresh and exciting culinary experience. Our menu features a diverse range of dishes, ensuring there's something for everyone. For our vegetarian guests, we have a special section dedicated to delicious vegetarian options. Come and enjoy great food in a pleasant ambience at our multicuisine restaurant, where every dish is a culinary delight.
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

export default Baneras

export const metadata = {
    title: "Savor Delightful Flavors at Hotel Runway Inn - A Culinary Journey Awaits.",
    description: 'Treat your taste buds to a culinary adventure at Hotel Runway Inn. From authentic local cuisine to international delights, our dining options promise to tantalize your senses and leave you craving for more.',        
    link:"https://www.hotelrunwayinn.com",
}