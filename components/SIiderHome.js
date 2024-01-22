import Link from "next/link";
import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { getAllGalleryImages } from "@/api/gallery";
import Image from "next/image";

const SliderHome = () => {
  const [swiperr, setSwiperr] = useState(null);
  const [nextDisbale, setNextDisable] = useState(false);
  const [PrevDisbale, setPrevDisable] = useState(true);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllGalleryImages();
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
    slidesPerView: 2,
    // loop: true,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    speed: 1000,
    spaceBetween: 3,
  };

  return (
    <div >
    <section className="slider-area">
      <div>
        <Swiper key={imageData.length} {...params} getSwiper={setSwiperr}>
          {imageData.map((image) => (
            <div
              key={image.id}
              className="single-slide-item"
            
            >
              <img
                style={{
                maxWidth: "100%",
                maxHeight: "100%",
                
                }}
                src={image.imagePath}
                alt="image"
              />
            </div>
          ))}
        </Swiper>
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
    </div>
  );
};

export default SliderHome;
