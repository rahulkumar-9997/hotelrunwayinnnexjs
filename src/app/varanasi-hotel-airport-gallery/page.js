import React from 'react'

const Gallery = () => {
    return (
        <>
            <div
                className="banner-header section-padding valign bg-img bg-fixed"
                data-overlay-dark={6}
                // data-background="img/images/banner/1.webp"
                style={{ backgroundImage: "url('img/images/banner/1.webp')", backgroundPosition: "bottom", backgroundSize: "cover" }}
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
                            <h1>Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Image Gallery */}
            <section className="section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 gallery-item">
                            <a href="img/images/banquet/IMG_2093.1.jpg" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/banquet/IMG_2093.1.jpg"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Premium Economy/16-1-Copy.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Premium Economy/16-1-Copy.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Family Suite Edited/1-1.jpg" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Family Suite Edited/1-1.jpg"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Family Suite Edited/4.1.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Family Suite Edited/4.1.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* 2 columns */}
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Premium Economy/8.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Premium Economy/8.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Maharaja Suite Edited/17-1-min.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Maharaja Suite Edited/17-1-min.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Pool Area Edited/3.2.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Pool Area Edited/3.2.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* 3 columns */}
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Business class edited/jpeg-optimizer_IMG_3107.png" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Business class edited/jpeg-optimizer_IMG_3107.png"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div className="col-md-4 gallery-item">
                            <a href="img/slider/banner-4.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/slider/banner-4.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/restaurant/12.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/restaurant/12.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 gallery-item">
                            <a href="img/images/reception/8.jpg" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/reception/8.jpg"
                                            className="img-fluid mx-auto d-block galrecep"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 gallery-item">
                            <a href="img/images/restaurant/4.1.webp" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/restaurant/4.1.webp"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/*3 Column */}

                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Premium Economy/13-1.png" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Premium Economy/13-1.png"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* 2 columns */}

                        <div className="col-md-4 gallery-item">
                            <a href="img/images/banquet/jpeg-optimizer_IMG_2345.jpg" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/banquet/jpeg-optimizer_IMG_2345.jpg"
                                            className="img-fluid mx-auto d-block galbanquet"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 gallery-item">
                            <a href="img/images/Gallery Edited/1.png" title="" className="img-zoom">
                                <div className="gallery-box">
                                    <div className="gallery-img">
                                        {" "}
                                        <img
                                            src="img/images/Gallery Edited/1.png"
                                            className="img-fluid mx-auto d-block"
                                            alt="work-img"
                                        />{" "}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Gallery


export const metadata = {
    title: "Experience Varanasi's Charm Through Our Gallery - Hotel Runway Inn",
    description: 'Immerse yourself in the beauty of Varanasi with a glimpse into our gallery at Hotel Runway Inn. Discover the warmth and hospitality that awaits you in every corner of our hotel.',        
    link:"https://www.hotelrunwayinn.com",
}