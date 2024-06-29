'use client'
import React, { useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import Link from 'next/link';
// import HotelAmenitiesTable from './HotelAmenitiesTable';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    marginLeft: 20,
    marginRight: 20,
  }
};


const Rooms = () => {
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   }, [hash]);

  return (
    <>
      <div
        className="banner-header section-padding valign bg-img bg-fixed"
        data-overlay-dark={6}
        style={{backgroundImage:"url('img/images/banner/1.webp')"}}
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
              <h1>Rooms &amp; Suites</h1>
            </div>
          </div>
        </div>
      </div>


      <section className="section-padding">
        <div className="container">

          <div className="row " id='premium-economy'></div> 
          <div className="row" style={{margin:"7rem 0 0 0"}}>
            <div className="col-md-12" >
              <div
                className="rooms2 animate-box"
                data-animate-effect="fadeInUp"

              >
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} className="custom-carousel">
                  <div>
                    <figure>
                      <img src="img/images/Premium Economy/8.webp" />
                    </figure>
                  </div>
                  <div>
                    <figure>
                      <img src="img/images/Premium Economy/16-1-Copy.webp" />
                    </figure>
                  </div>
                  <div>
                    <figure>
                      <img src="img/images/Premium Economy/13-1-Copy.webp" />
                    </figure>
                  </div>

                </Carousel>
                <div className="caption">
                  {/* <h3>
                7000₹ <span>/ Night</span>
              </h3> */}
                  <h4>
                    <a href="/">Premium Economy </a>
                  </h4>
                  <p>
                    Experience comfort and style in our Premium Economy Suite, offering modern amenities and a relaxing ambiance at an affordable price.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 2-3 Persons
                        </li>
                        <li>
                          <i className="flaticon-wifi" /> Free Wifi
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-bed" /> Wardrobe
                        </li>
                        <li>
                          <i className="flaticon-breakfast" /> Breakfast
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-clock-1" /> 150 sqft room
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Swimming Pool
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    {/* <div className="more">
                  <a href="room-details.html" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                    <div className="butn-dark">
                      {" "}
                      <Link href='https://asiatech.in/booking_engine/index3?token=NjAyNw==' >
                        <span>Book Now</span>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="row " id='business-class' style={{marginBottom:"7rem"}}></div> 
          <div className="row my-5" >
            <div className="col-md-12">
              <div
                className="rooms2 left animate-box"
                data-animate-effect="fadeInUp"

              >
                {/* <figure >
              <img src="img/images/Business class edited/IMG_3104.1 - Copy.JPG" alt="Business Class - Hotel Runway Inn" className="img-fluid" style={{aspectRatio:'5/3'}} loading='lazy'/>
            </figure> */}
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} className="custom-carousel">
                  <div>
                    <figure>
                      <img src="img/images/Business class edited/IMG_3104.1 - Copy.webp" />
                    </figure>
                  </div>
                  <div>
                    <figure>
                      <img src="img/images/Business class edited/jpeg-optimizer_IMG_3107.png" />
                    </figure>
                  </div>

                </Carousel>
                <div className="caption">
                  {/* <h3>
                5000₹ <span>/ Night</span>
              </h3> */}
                  <h4>
                    <a href="/">Business Class</a>
                  </h4>
                  <p>
                    Stay productive and unwind in our Business Suite, featuring a dedicated workspace and luxurious amenities tailored for business travelers.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 2-3 Persons
                        </li>
                        <li>
                          <i className="flaticon-wifi" /> Free Wifi
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-bed" /> Wardrobe
                        </li>
                        <li>
                          <i className="flaticon-breakfast" /> Breakfast
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-clock-1" /> 240 sqft room
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Swimming Pool
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    {/* <div className="more">
                  <a href="/" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                    <div className="butn-dark">
                      {" "}
                      <Link href='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>
                        <span>Book Now</span>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row " id='family-suite' style={{marginBottom:"7rem"}}></div> 
          <div className="row my-5" >
            <div className="col-md-12">
              <div
                className="rooms2 animate-box"
                data-animate-effect="fadeInUp"

              >
                {/* <figure>
            <img src="img/images/Family Suite Edited/1-1.jpg" alt="Junior Family Suite - Hotel Runway Inn" className="img-fluid" loading='lazy'/>
            </figure> */}
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} className="custom-carousel">
                  <div>
                    <figure>
                      <img src="img/images/Family Suite Edited/4.1.webp" />
                    </figure>
                  </div>
                  <div>
                    <figure>
                      <img src="img/images/Family Suite Edited/1-1.jpg" />
                    </figure>
                  </div>
                  {/* <div>
                <figure>
                    <img src="img/images/Family Suite Edited/1-1.jpg" />
                    </figure>
                </div> */}
                </Carousel>
                <div className="caption">
                  {/* <h3>
                6000₹ <span>/ Night</span>
              </h3> */}
                  <h4>
                    <a href="/">Junior Family Suite</a>
                  </h4>
                  <p>
                    Create lasting memories in our spacious Family Suite, designed to accommodate your family with comfort and convenience in mind.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 4-5 Persons
                        </li>
                        <li>
                          <i className="flaticon-wifi" /> Free Wifi
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-bed" /> Wardrobe
                        </li>
                        <li>
                          <i className="flaticon-breakfast" /> Breakfast
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-clock-1" /> 288 sqft Room
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Swimming Pool
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    {/* <div className="more">
                  <a href="/" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                    <div className="butn-dark">
                      {" "}
                      <Link href='https://asiatech.in/booking_engine/index3?token=NjAyNw==' >
                        <span>Book Now</span>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row " id='maharaja-suite' style={{marginBottom:"7rem"}}></div> 
          <div className="row my-5" >
            <div className="col-md-12">

              <div className="rooms2 left animate-box" data-animate-effect="fadeInUp" >
                {/* <figure>
              
              <img src="img/images/Maharaja Suite Edited/17-1-min.webp" alt="Maharaja Luxury Family Suite - Hotel Runway Inn" className="img-fluid" loading='lazy'/>
            </figure> */}
                <Carousel showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} className="custom-carousel">
                  <div>
                    <figure>
                      <img src="img/images/Maharaja Suite Edited/17-1-min.webp" />
                    </figure>
                  </div>
                  <div>
                    <figure>
                      <img src="img/images/Maharaja Suite Edited/1.png" />
                    </figure>
                  </div>
                  {/* <div>
                <figure>
                    <img src="img/images/Maharaja Suite Edited/17-1-min.webp" />
                    </figure>
                </div> */}
                </Carousel>
                <div className="caption">
                  {/* <h3>
                9000₹ <span>/ Night</span>
              </h3> */}
                  <h4>
                    <a href="/">Maharaja Luxury Family Suite</a>
                  </h4>
                  <p>
                    Indulge in luxury with our Maharaja Suite, featuring exquisite decor and personalized service fit for royalty.
                  </p>
                  <div className="row room-facilities">
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-group" /> 4-6 Persons
                        </li>
                        <li>
                          <i className="flaticon-wifi" /> Free Wifi
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-bed" /> Wardrobe
                        </li>
                        <li>
                          <i className="flaticon-breakfast" /> Breakfast
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul>
                        <li>
                          <i className="flaticon-clock-1" /> 518 sqft Room
                        </li>
                        <li>
                          <i className="flaticon-swimming" /> Swimming Pool
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-2" />
                  <div className="info-wrapper">
                    {/* <div className="more">
                  <a href="room-details.html" className="link-btn" tabIndex={0}>
                    Details <i className="ti-arrow-right" />
                  </a>
                </div> */}
                    <div className="butn-dark">
                      {" "}
                      <Link href="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
                        <span>Book Now</span>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <HotelAmenitiesTable /> */}
    </>
  )
}

export default Rooms
