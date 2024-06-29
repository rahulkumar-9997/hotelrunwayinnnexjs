'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Aqua = () => {
  return (
    <>
          <div
    className="banner-header section-padding valign bg-img bg-fixed"
    data-overlay-dark={6}
    // data-background="img/images/banner/1.webp"
    style={{backgroundImage: 'url("img/images/restaurant/resturant-Copy.webp")',backgroundPosition:"bottom",backgroundSize:"cover"}}
    // style={{backgroundPosition:"bottom",backgroundSize:"cover"}}
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
          <h1>Aqua Lounge</h1>
        </div>
      </div>
    </div>
  </div>
      <section className="rooms-page section-padding" data-scroll-index={1}>
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <h2 className="section-title abt">The one & only natural roof top swimming pool with lush green environment in the town in varanasi </h2>
                <p className="mb-30">
                For a truly refined experience, this venue offers a sophisticated ambiance ideal for meetings among business partners, colleagues, and friends alike. The rooftop pool area, located at Level-3, features a luxurious lounge area with a wooden deck floor and a lavish garden. With seating for approximately 40-45 guests, the space offers a unique blend of half-covered and half-open settings, providing a charming and relaxing environment. Whether you're looking to unwind or host a memorable gathering, this rooftop oasis promises a delightful experience for all.
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
                    {/* <h6>Dress Code</h6>
                    <p>Smart casual (no shorts, hats, or sandals permitted)</p>
                    <h6>Terrace</h6>
                    <p>Open for drinks only</p> */}
                </div>
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
                    <div className="section-title ">Aqua Lounge</div>
                    <img src="img/images/restaurant/aqua.png" alt="" className="ms-5 w-25 h-25 wid" />
                </div>
                {/* <img src="img/rooms/resturant.png" alt="" className="mt-30 mb-30" /> */}
                <Carousel showIndicators={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                  {/* <div>
                    <img src="img/images/restaurant/2.1.png" alt="" />
                  </div> */}
                  {/* <div>
                    <img src="img/images/restaurant/1-Copy.png" alt=""  />
                  </div> */}
                  <div>
                    <img src="img/images/restaurant/resturant-Copy.webp" alt="Aqua Lounge - Hotel Runway Inn" />
                  </div>
                  <div>
                    <img src="img/images/restaurant/12.webp" alt="Aqua Lounge - Luxury Hotel Runway Inn" />
                  </div>
                  <div>
                    <img src="img/images/restaurant/3-1-Copy.webp" alt="Aqua Lounge - Top Hotel Runway Inn" />
                  </div>
                  <div>
                    <img src="img/images/restaurant/11.webp" alt="Aqua Lounge - Best Hotel Runway Inn" />
                  </div>
                 
            </Carousel>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Aqua
