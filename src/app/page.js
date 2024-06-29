import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner/Banner";
import RoomHome from "@/components/RoomHome/RoomHome";
import Facilities from "@/components/Facilities/Facilities";
import Affiliation from "@/components/Affiliation/Affiliation";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <section
        className="rooms-page about section-padding2 imageabout"
        style={{
          backgroundImage: 'url("../img/1.1-Copy.webp")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="row rev">
            <div
              className="col-md-8 mb-30 "
              
            >
              <div className="section-title abt desktop_title newAnimation">Discover comfort just outside Lal Bahadur Shastri International Airport in Varanasi</div>
              <p className="newAnimation">Welcome to Hotel Runway Inn,your gateway to Varanasi's spiritual allure! Step into modern elegance in rooms and suites, offering stunning views and a range of options from Economy to Maharaja Suite. Indulge in culinary delights at our restaurant Simply Benares or relax at our rooftop Aqua Lounge, where a swimming pool and scenic vistas await.</p>

              <p className="newAnimation">With a stellar <strong>4.5-star rating on Google</strong>, join us for an unforgettable stay marked by unparalleled comfort and satisfaction!</p>

              <div className="reservations newAnimation">
                <div className="icon">
                  <span className="flaticon-call" />
                </div>
                <div className="text">
                  <p>Reservation</p> <a href="tel:93058 04900">93058 04900</a>
                </div>
              </div>

            </div>
            <div
              className="col col-md-4 newAnimation"
              data-animate-effect="fadeInUp"
            >
              <div className="section-title abt mobile_display_block" >Discover comfort just outside Lal Bahadur Shastri International Airport in Varanasi</div>
              <img
                src="img/1-Copy.webp"
                alt="Hotel Runway inn best hotel near kashi vishwanath Temple"
                className="mb-5"
              />
              <img
                src="img/vns1.webp"
                alt="Hotel Runway inn best hotel near kashi vishwanath Temple"
                className="ms-5 ps-5  mobview"
              />
            </div>

          </div>

        </div>
      </section>

      <section className="rooms1 section-padding bg-cream " data-scroll-index={1}>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 ">
              <div className="section-subtitle">Hotel Runway Inn</div>
              <div className="section-title">Rooms &amp; Suites</div>
            </div>
          </div>
          <div className="row">
            <RoomHome />
          </div>
        </div>
      </section>

      <Facilities />

      <section className="services my-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 p-0 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img ">
                <a href="/simply-benaras">
                  <img src="img/images/restaurant/1 - Copy.jpg" alt="Simply Benares - Best restaurant in Varanasi - Hotel Runway Inn" />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 p-0 bg-cream valign animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="content">
                <div className="cont text-left">
                  <div className="info">
                    <h6>Discover</h6>
                  </div>
                  <h4>Simply Benares</h4>
                  <p>Nestled just outside Varanasi Airport, our multicuisine casual dining restaurant offers a delightful culinary experience with its fresh and exciting menu. With a seating capacity of 55-60 covers, our restaurant provides a welcoming ambience for guests to indulge in a full day dining experience.</p>
                  <div className="butn-dark">
                    {" "}
                    <a href="/simply-benaras">
                      <span>Learn More</span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 bg-cream p-0 order2 valign animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="content">
                <div className="cont text-left">
                  <div className="info">
                    <h6>RoofTop</h6>
                  </div>
                  <h4> Pool Area</h4>
                  <p>
                    Escape the bustle of travel and unwind in our exquisite pool
                    area, a serene haven near the airport in Varanasi. Immerse
                    yourself in comfort and relaxation as you soak up the sun or
                    take a refreshing dip in our inviting pool.
                  </p>
                  <div className="butn-dark">
                    {" "}
                    <a href="/aqua-lounge">
                      <span>Learn More</span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 p-0 order1 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                <a href="/aqua-lounge">
                  <img src="img/images/restaurant/12.webp" alt="Sky-High Serenity - Top restaurant in Varanasi - Hotel Runway Inn" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 p-0 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img left">
                <a href="/Banquet">
                  <img src="img/images/banquet/IMG_2093.1.jpg" alt="Banquet Hall - Restaurant In Varanasi - Hotel Runway Inn" />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 p-0 bg-cream valign animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="content">
                <div className="cont text-left">
                  <div className="info">
                    <h6>Marriage</h6>
                  </div>
                  <h4>Banquet Hall</h4>
                  <p>
                    Transform your gatherings into unforgettable occasions at our
                    exquisite banquet halls, strategically located near Varanasi
                    Airport. Discover unmatched elegance, impeccable service, and a
                    perfect blend of sophistication and convenience.
                  </p>
                  <div className="butn-dark">
                    {" "}
                    <a href="/Banquet">
                      <span>Learn More</span>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Affiliation/>
      <Testimonial/>
    </>
  );
}
