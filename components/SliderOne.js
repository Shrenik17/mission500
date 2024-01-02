import Link from "next/link";
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiperr, setSwiperr] = useState(null);
  const [nextDisbale, setNextDisable] = useState(false);
  const [PrevDisbale, setPrevDisable] = useState(true);

  const goNext = () => {
    setPrevDisable(false);
    if (swiperr.activeIndex <= 6) {
      if (swiperr.activeIndex == 6) {
        setNextDisable(true);
      }
      console.log(swiperr.activeIndex);
      swiperr.slideNext();
    }
  };

  const goPrev = () => {
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
    slidesPerView: 2,
    // loop: true,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    speed: 1000,
    spaceBetween: 3,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    // Responsive breakpoints
    // breakpoints: {
    //   1499: {
    //     slidesPerView: 3,
    //   },

    //   991: {
    //     slidesPerView: 3,
    //   },

    //   767: {
    //     slidesPerView: 2,
    //   },

    //   575: {
    //     slidesPerView: 2,
    //   },
    // },
  };

  return (
    <section className="slider-area">
      <div className="homepage-slide1">
        <Swiper {...params} getSwiper={setSwiperr}>
          <div className="single-slide-item slide-bg1"></div>
          <div className="single-slide-item slide-bg2"></div>
          <div className="single-slide-item slide-bg3"></div>
          <div className="single-slide-item slide-bg4"></div>
          <div className="single-slide-item slide-bg5"></div>
          <div className="single-slide-item slide-bg6"></div>
          <div className="single-slide-item slide-bg7"></div>
          <div className="single-slide-item slide-bg8"></div>
        </Swiper>
        {/* <div className="swiper-pagination"></div> */}
        {/* <div className="owl-dots">
          <div onClick={goPrev} className="owl-dot">
            <span style={{ padding: "5px" }}>1</span>
          </div>
          <div onClick={goNext} className="owl-dot">
            <span style={{ padding: "5px" }}>2</span>
          </div>
        </div> */}
      </div>
      <div className="d-flex justify-content-center">
        <div
          onClick={goPrev}
          className="owl-dot"
          style={{
            display: "flex",
            justifyContent: "center",

            cursor: "pointer",
          }}
        >
          {swiperr && swiperr.activeIndex == 0 ? ( // Replace shouldDisablePrevButton with your condition
            <svg
              fill="#828282"
              width="50px"
              height="50px"
              viewBox="-24 -24 72.00 72.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#828282"
              strokeWidth="2.4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path>
              </g>
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="50px"
              height="50px"
              viewBox="-24 -24 72.00 72.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="2.4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path>
              </g>
            </svg>
          )}
        </div>
        <div
          onClick={goNext}
          className=" owl-dot"
          style={{
            display: "flex",
            justifyContent: "center",

            cursor: "pointer",
          }}
        >
          {nextDisbale ? ( // Replace shouldDisablePrevButton with your condition
            <svg
              fill="#828282"
              width="50px"
              height="50px"
              viewBox="-24 -24 72.00 72.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#828282"
              strokeWidth="2.4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
              </g>
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="50px"
              height="50px"
              viewBox="-24 -24 72.00 72.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="2.4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path>
              </g>
            </svg>
          )}
        </div>
      </div>
    </section>
  );
};

export default SliderOne;
