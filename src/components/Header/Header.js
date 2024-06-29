'use client'
import React, { useState } from 'react'
import Link from 'next/link';

const Header = () => {
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false);
  const [isOpen, setIsOpen]= useState(false)

  const toggleRoomDropdown = () => {
    setIsRoomDropdownOpen(!isRoomDropdownOpen);
    setIsRestaurantDropdownOpen(false); // Close restaurant dropdown
  };

  const toggleRestaurantDropdown = () => {
    setIsRestaurantDropdownOpen(!isRestaurantDropdownOpen);
    setIsRoomDropdownOpen(false); // Close room dropdown
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: smooth scrolling behavior
    });
  };

  function handleClick(){
    setIsOpen(!isOpen)
  }

  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        {/* Logo */}
        <div className="logo-wrapper" onClick={scrollToTop}>
          <Link className="logo" href="/">
            {" "}
            <img src="img/runnway.png" className="logo-img link log" alt="Runway Hotel Logo" />{" "}
          </Link>
        </div>
        {/* Button */}
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbar"
          // aria-controls="navbar"
          // aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleClick}
        >
          {" "}
          <span className="navbar-toggler-icon">
            <i className="ti-menu" style={{ fontSize: '30px' }} />
          </span>{" "}
        </button>
        <div className={` mr-5  ${isOpen ? "navBarOpen" : "navbar-collapse" } `} id="navbar">
          <ul className="navbar-nav ms-auto" >

            <li className="nav-item dropdown" onClick={toggleRoomDropdown}>
              <span className="nav-link link">
                <span className="nav-link1"><Link href='/varanasi-best-hotel-room'>Room</Link></span>
                <i className={`ti-angle-down mob dropdown-toggle`} />
              </span>
              <ul className={`dropdown-menu ${isRoomDropdownOpen ? 'show' : ''}`}>
                <li><Link href="/varanasi-best-hotel-room#premium-economy" className="dropdown-item nav-link1"><span>Premium Economy</span></Link></li>
                <li><Link href="/varanasi-best-hotel-room#business-class" className="dropdown-item nav-link1"><span>Business Class</span></Link></li>
                <li><Link href="/varanasi-best-hotel-room#family-suite" className="dropdown-item nav-link1"><span>Junior Family Suite</span></Link></li>
                <li><Link href="/varanasi-best-hotel-room#maharaja-suite" className="dropdown-item nav-link1"><span>Maharaja Luxury Family Suite</span></Link></li>
              </ul>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <Link className="nav-link link nav-link1" href="/best-banquet-varanasi-hotel" >
                Banquets
              </Link>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <Link className="nav-link nav-link1 link" href="/varanasi-hotel-airport-gallery" >
                Gallery
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={toggleRestaurantDropdown}>
              <span className="nav-link link">
                <span className="nav-link1" ><Link href='/varanasi-airport-restaurant' onClick={scrollToTop}>Dining</Link></span>
                <i className={`ti-angle-down mob dropdown-toggle`} />
              </span>
              <ul className={`dropdown-menu ${isRestaurantDropdownOpen ? 'show' : ''}`}>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link href="/best-lounge-varanasi-airport">Aqua Lounge</Link>
                </li>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link href="/simply-banaras-best-restaurant">Simply Benares</Link>
                </li>
                <li className="dropdown-item nav-link1" onClick={scrollToTop}>
                  <Link href="/satvij-bhoj-varanasi-hotel">Satvik Bhoj</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item" onClick={scrollToTop}>
              <Link className="nav-link link nav-link1" href="/varanasi-hotel-runway-tariff" >
                Tariff
              </Link>
            </li>
            <li className="nav-item" onClick={scrollToTop}>
              <Link className="nav-link link nav-link1" href="/varanasi-runway-inn-contact">
                Contact
              </Link>
            </li>
          </ul>
          <button type="submit" className="btn bok">
            <Link href='https://asiatech.in/booking_engine/index3?token=NjAyNw=='>Book Now</Link>
          </button>
        </div>

      </div>
    </nav>

  )
}

export default Header
