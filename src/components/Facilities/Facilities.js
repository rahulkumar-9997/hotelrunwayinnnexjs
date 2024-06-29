import React from 'react'

const Facilities = () => {
  return (
    <div>
      <section className="facilties mt-5" >
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section-subtitle">Our Services</div>
                <div className="section-title">Hotel Facilities</div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4 text-center ">
            
                <div
                    className="single-facility border-right newAnimationFacility"
                    // data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-swimming" />
                    <h5>Swimming Pool</h5>
                    <p>
                    Relax and unwind in our inviting swimming pool, a refreshing escape for leisure and relaxation.
                    </p>
                    {/* <p>
                    Enjoy a refreshing escape with our inviting swimming pool,
                    offering a perfect blend of relaxation and leisure at our hotel.
                    </p> */}
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-swimming" />{" "}
                    </div>
                </div>
                
                </div>
                <div className="col-md-4 text-center ">
                <div
                    className="single-facility newAnimationFacility border-right"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-world" />
                    <h5>Pick Up &amp; Drop</h5>
                    <p>We’ll pick up from airport while you comfy on your ride.</p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-world" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center">
                <div
                    className="single-facility newAnimationFacility"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-car" />
                    <h5>Parking Space</h5>
                    <p>Hotel Runway Inn provides convenient parking space.</p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-car" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center ">
                <div className="single-facility newAnimationFacility border-right"
                    data-animate-effect="fadeInUp">
                    <span className="flaticon-bed" />
                    <h5>Room Service</h5>
                    <p>
                    Hotel  Runway Inn offers efficient room service for a
                    comfortable and enjoyable stay.
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-bed" />{" "}
                    </div>
                </div>
                </div>
                
                <div className="col-md-4 text-center ">
                <div
                    className="single-facility newAnimationFacility border-right"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-wifi" />
                    <h5>Fibre Internet</h5>
                    <p>
                    Hotel offers high-speed fiber internet services for seamless
                    and fast connectivity.
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-wifi" />{" "}
                    </div>
                </div>
                </div>
                <div className="col-md-4 text-center">
                <div
                    className="single-facility newAnimationFacility"
                    data-animate-effect="fadeInUp"
                >
                    <span className="flaticon-breakfast" />
                    <h5>Breakfast</h5>
                    <p>
                    Indulge in the culinary delights of a multicuisine casual dining
                    restaurant{" "}
                    </p>
                    <div className="facility-shape">
                    {" "}
                    <span className="flaticon-breakfast" />{" "}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Facilities
