import React from 'react'

const Tariff = () => {
    return (
        <>
            <div className="banner-header section-padding valign bg-img bg-fixed" data-overlay-dark={6}
                style={{ backgroundPosition: "center", backgroundSize: "cover", backgroundImage:'url("img/images/reception/18-1.webp")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-left caption mt-90">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                            </span>
                            <h5>Hotel Runway Inn</h5>
                            <h1>Tariff</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pricing section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pricing-card">

                                <img src="img/images/Premium Economy/8-1.webp" alt="Premium Economy - Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />
                                <div className="desc">
                                    <div className="name">PREMIUM ECONOMY</div>
                                    <div className='d-flex'>
                                        <div className="name text-center pt-2">
                                            Single -
                                        </div>
                                        <div className="amount px-2">
                                            Rs. 5000/- day
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="name text-center pt-2">
                                            Double -
                                        </div>
                                        <div className="amount px-2">
                                            Rs. 6000/- day
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pricing-card">
                                <img src="img/images/Business class edited/IMG_3104.1.JPG" alt="Business Class - Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />
                                <div className="desc">
                                    <div className="name">BUSINESS CLASS</div>
                                    <div className='d-flex'>
                                        <div className="name text-center pt-2">
                                            Single -
                                        </div>
                                        <div className="amount px-2">
                                            Rs. 6000/- day
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="name text-center pt-2">
                                            Double -
                                        </div>
                                        <div className="amount px-2">
                                            Rs. 7000/- day
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className=" video py-5 bg-img bg-fixed "
                data-overlay-dark={7}
                style={{backgroundImage:"url('img/images/reception/18-1.webp')"}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <span>
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                                <i className="star-rating" />
                            </span>
                            <div className="section-subtitle">
                                <span>(Rates for extra bed in INR Rs. 1000/- +GST)</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center col-md-12">
                            <ol className='text-white text-justify '>
                                <li><i className="ti-check" /> Above rates are inclusive of buffet breakfast and</li>
                                <li><i className="ti-check" /> Exclusive of applicable government taxes</li>
                                <li><i className="ti-check unavailable" />Tariff and taxes are subject to change</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pricing-card">
                                <img src="img/images/Family Suite Edited/1-1.webp" alt="Junior Family Suite - Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />
                                <div className="desc">
                                    <div className="name">JUNIOR FAMILY SUITE</div>
                                    <div className='d-flex'>
                                        <div className="amount px-2">
                                            Rs. 10999/- day
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pricing-card">
                                <img src="img/images/Maharaja Suite Edited/17-1-min.webp" alt="Maharaja Luxury Family Suite - Hotel Runway Inn" style={{ aspectRatio: '3/2' }} loading='lazy' />
                                <div className="desc">
                                    <div className="name">MAHARAJA LUXURY FAMILY SUITE </div>
                                    <div className="amount">
                                        Rs. 16999/- day
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Tariff


export const metadata = {
    title: "The Runway Inn - Unwind in Comfort at Varanasi's Best Budget-Friendly Hotel",
    description: 'Escape to The Runway Inn, where affordability meets comfort in the heart of Varanasi. Discover our pocket-friendly tariffs and experience the perfect blend of convenience and relaxation for your memorable stay.',        
    link:"https://www.hotelrunwayinn.com",
}