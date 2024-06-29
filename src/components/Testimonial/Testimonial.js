'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonial.css';

const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            img: 'img/images/testimonial/6.jpg',
            name: 'Rajesh Sharma',
            position: 'Business Traveler',
            text: "At Hotel Runway Inn, we had a great experience! Even though we were on a tight budget, the hotel's facilities and beautiful arrangements made us feel satisfied. The staff was very helpful and supportive. We had our meals here with our family, and we are sure we will come back again!"
        },
        {
            id: 2,
            img: 'img/images/testimonial/4.jpg',
            name: 'Ananya Patel',
            position: 'Tourist',
            text: "We were truly impressed by the facilities and cleanliness of Hotel Runway Inn. The morning tea filled with sweetness and delicious meals won our hearts. The hotel's location near all the major attractions of the city made traveling easy for us. We recommend this hotel to everyone without any doubt!."
        },
        {
            id: 3,
            img: 'img/images/testimonial/5.jpg',
            name: 'Vivek Singhania',
            position: 'Frequent Flyer',
            text: "The beautiful ambiance and special facilities of Hotel Runway Inn made our trip memorable. The staff's warm smiles and their prompt availability touched our hearts. The combination of amenities here was delightful and satisfying for us. We recommend Hotel Runway Inn to every traveler without any hesitation!",
        },
    ];


    return (
        <div>
            <section className="testimonials">
                <div className="background bg-img bg-fixed " data-overlay-dark={6} style={{backgroundImage:'url("img/slider/banner-4.webp")'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="my-5">
                                    <div className="head-box">
                                        <h6>Testimonials</h6>
                                        <h4>What Client's Say?</h4>
                                        <div className="line" />
                                    </div>
                                    <Carousel showArrows={false} showIndicators={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} className="custom-carousel">
                                        {testimonials.map((testimonial) => (
                                            <div className="" key={testimonial.id}>
                                                <div className="item">
                                                    <span className="quote">
                                                        <img src="img/quot.png" alt="" />
                                                    </span>
                                                    <p>{testimonial.text}</p>
                                                    <div className="info">
                                                        <div className="author-img ">
                                                            {" "}
                                                            <img src={testimonial.img} alt="" />{" "}
                                                        </div>
                                                        <div className="cont">
                                                            {" "}
                                                            <span>
                                                                <i className="star-rating" />
                                                                <i className="star-rating" />
                                                                <i className="star-rating" />
                                                                <i className="star-rating" />
                                                                <i className="star-rating" />
                                                            </span>
                                                            <h6>{testimonial.name}</h6> <span>{testimonial.position}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonial
