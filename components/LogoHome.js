import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { getAllLogoImages } from "@/api/logoAPI";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
const LogoHome = () => {
  const [swiperr, setSwiperr] = useState(null);
  const [nextDisbale, setNextDisable] = useState(false);
  const [PrevDisbale, setPrevDisable] = useState(true);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllLogoImages();
      console.log(response);
      setImageData(response);
    };

    getData();
  }, []);

  const goNext = () => {
    console.log("Going to next slide");
    setPrevDisable(false);
    const maxIndex = imageData.length - 2;
    if (swiperr.activeIndex <= maxIndex) {
      if (swiperr.activeIndex == maxIndex) {
        setNextDisable(true);
      }
      console.log(swiperr.activeIndex);
      swiperr.slideNext();
    }
  };
  const goPrev = () => {
    console.log("Going to previous slide");
    setNextDisable(false);
    if (swiperr.activeIndex >= 1) {
      if (swiperr.activeIndex == 1) {
        setPrevDisable(true);
      }
      console.log(swiperr.activeIndex);
      swiperr.slidePrev();
    }
  };
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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
              <div className="section-icon"></div>
              <h2 style={{ fontWeight: "400" }} className="section__title">
                Partners
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="client-logo mt-5">
              <Swiper key={imageData.length} {...params}>
                {imageData.map((image) => (
                  <Link key={image.id} href={image.logoLink} target="_blank">
                    <div className="client-logo-item">
                      <Tooltip
                        title={
                          <span style={{ fontSize: "16px" }}>
                            {" "}
                            {image.title}
                          </span>
                        }
                        placement="bottom"
                      >
                        <img
                          style={{
                            width: "200px",
                            height: "170px",
                          }}
                          src={image.imagePath}
                          alt="image"
                        />
                      </Tooltip>
                    </div>
                  </Link>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoHome;
