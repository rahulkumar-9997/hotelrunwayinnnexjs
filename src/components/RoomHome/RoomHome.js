'use client'
import React from 'react'
import './RoomHome.css'
import Link from 'next/link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    marginLeft: 20,
    marginRight: 20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    marginLeft: 20,
    marginRight: 20
  }
};



const RoomHome = () => {
  return (
    <Carousel responsive={responsive} infinite={true}
      autoPlay={true} arrows={false}
      autoPlaySpeed={3000}>

      <div className="card mobcard  ">
        <img src="img/images/Premium Economy/8.webp" alt="Premium Economy-Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />
        <div className="card-body" style={{minHeight:"25rem"}}>
          <h4 className="card-title"><Link href="/Room">Premium Economy</Link></h4>
          <p>
            Experience comfort and style in our Premium Economy Suite, offering modern amenities and a relaxing ambiance at an affordable price.
          </p>
          <div className="row room-facilities">
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-group" /> 2-3 Persons
                </li>
                <li>
                  <i className="flaticon-wifi" /> Free Wifi
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-bed" /> Twin Bed
                </li>
                <li>
                  <i className="flaticon-breakfast" /> Breakfast
                </li>
              </ul>
            </div>
            <div className="col-md-12">
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
          <div className="butn-dark text-end">
            {" "}
            <Link href="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
              <span>Book Now</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="card mobcard">
        <img
          src="img/images/Business class edited/IMG_3104.2.JPG"
          alt="Business Class - Hotel Runway Inn"
          style={{ aspectRatio: '3/2' }}
          loading='lazy'
        />{" "}
        <div className="card-body">
          <h4 className="card-title"><Link href="/Room">Business Class</Link></h4>
          <p>
            Stay productive and unwind in our Business Suite, featuring a dedicated workspace and luxurious amenities for business travelers.
          </p>
          <div className="row room-facilities">
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-group" /> 2-3 Persons
                </li>
                <li>
                  <i className="flaticon-wifi" /> Free Wifi
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-bed" /> Twin Bed
                </li>
                <li>
                  <i className="flaticon-breakfast" /> Breakfast
                </li>
              </ul>
            </div>
            <div className="col-md-12">
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
          <div className="butn-dark text-end">
            {" "}
            <Link href="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
              <span>Book Now</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="card mobcard" >
        <img src="img/images/Family Suite Edited/4.webp" alt="Junior Family Suite - Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />{" "}
        <div className="card-body">
          <h4 className="card-title"><Link href="/Room">Junior Family Suite</Link></h4>
          <p>
            Create lasting memories in our spacious Family Suite, designed to accommodate your family with comfort and convenience in mind.
          </p>
          <div className="row room-facilities">
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-group" /> 4-5 Persons
                </li>
                <li>
                  <i className="flaticon-wifi" /> Free Wifi
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-bed" /> Twin Bed
                </li>
                <li>
                  <i className="flaticon-breakfast" /> Breakfast
                </li>
              </ul>
            </div>
            <div className="col-md-12">
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
          <div className="butn-dark text-end">
            {" "}
            <Link href="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
              <span>Book Now</span>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="card mobcard" >
        <img
          src="img/images/Maharaja Suite Edited/17-1-min.webp"
          alt="Maharaja Luxury Family Suite - Hotel Runway Inn"
          style={{ aspectRatio: '3/2' }}
          loading='lazy'
        />{" "}
        <div className="card-body">
          <h4 className="card-title"><Link href="/Room">Maharaja Luxury Family</Link></h4>
          <p>
            Indulge in luxury with our Maharaja Suite, featuring exquisite decor and personalized service fit for royalty.
          </p>
          <div className="row room-facilities">
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-group" /> 4-6 Persons
                </li>
                <li>
                  <i className="flaticon-wifi" /> Free Wifi
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul>
                <li>
                  <i className="flaticon-bed" /> Twin Bed
                </li>
                <li>
                  <i className="flaticon-breakfast" /> Breakfast
                </li>
              </ul>
            </div>
            <div className="col-md-12">
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
          <div className="butn-dark text-end">
            {" "}
            <Link href="https://asiatech.in/booking_engine/index3?token=NjAyNw==" >
              <span>Book Now</span>
            </Link>{" "}
          </div>
        </div>
      </div>


    </Carousel>
  )
}

export default RoomHome
