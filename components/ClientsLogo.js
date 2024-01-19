import Link from "next/link";
import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const ClientsLogo = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      1499: {
        slidesPerView: 3,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
      },

      575: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className="clientlogo-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-heading blog-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2  style={{fontWeight:"400"}} className="section__title">Partners</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="client-logo mt-5">
              <Swiper {...params}>
                {/* <Link href="https://sakalrelieffund.com/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client-logo1.jpg"
                      width={200}
                      height={170}
                      alt="brand image"
                    />
                  </div>
                {/* </Link>
                <Link href="https://www.rotarypunecamp.com/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client-logo2.jpg"
                      width={200}
                      height={170}
                      alt="brand image"
                    />
                  </div>
                {/* </Link>
                <Link href="https://naammh.org/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client-logo3.jpg"
                      width={200}
                      height={170}
                      alt="brand image"
                    />
                  </div>
                {/* </Link>
                <Link href="https://www.credaipune.org/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client_logo07.jpg"
                      width={400}
                      height={130}
                      alt="brand image"
                    />
                  </div>
                {/* </Link>
                <Link href="https://bjsindia.org/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client-logo4.jpg"
                      width={200}
                      height={170}
                      alt="brand image"
                    />
                  </div>
                {/* </Link>
                <Link href="https://www.dorfketal.com/" target="_blank"> */}
                  <div className="client-logo-item">
                    <img
                      src="/images/client_logo5.jpg"
                      width={400}
                      height={130}
                      alt="brand image"
                    />
                  </div>
                {/* </Link> */}
                <div className="client-logo-item">
                    <img
                      src="/images/client-logo6.png"
                      width={200}
                      height={170}
                      alt="brand image"
                    />
                  </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogo;
