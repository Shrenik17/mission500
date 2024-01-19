import Link from "next/link";
import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const MapsSwiper = () => {
  const [swiperr, setSwiperr] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const [nextDisbale, setNextDisable] = useState(false);
  const [PrevDisbale, setPrevDisable] = useState(true);

  const goNext = () => {
    setPrevDisable(false);
    if (swiperr.activeIndex <= 4) {
      if (swiperr.activeIndex == 4) {
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
    slidesPerView: 3,
    // loop: true,
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    speed: 1000,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
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

  const images = [
    {
      src: "/images/flow1.jpg",
      alt: "Step 1",
      description: "Village Identification",
    },
    {
      src: "/images/flow2.jpg",
      alt: "Step 2",
      description: "Farmer Group Formation",
    },
    {
      src: "/images/flow3.jpg",
      alt: "Step 3",
      description: "Benificary Identification",
    },
    {
      src: "/images/flow4.jpg",
      alt: "Step 4",
      description: "Work Break Down Structure",
    },
    {
      src: "/images/flow5.jpg",
      alt: "Step 5",
      description: "Demand Letter & Approval",
    },
    {
      src: "/images/flow6.jpg",
      alt: "Step 6",
      description: "Work Commencement",
    },
    {
      src: "/images/flow7.jpg",
      alt: "Step 7",
      description: "Recommendation Letter",
    },
    {
      src: "/images/flow8.jpg",
      alt: "Step 8",
      description: "Social Audit",
    },
  ];

  const handleImageClick = (imageSrc, imageDescription) => {
    setSelectedImage(imageSrc);
    setDescription(imageDescription);
  };

  //   console.log("image", selectedImage, "desc", description);
  return (
    <section className="clientlogo-area">
      <div className="container">
        <div className="row">
          <div
            onClick={goPrev}
            className="col-md-1 owl-dot"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {swiperr && swiperr.activeIndex == 0 ? ( // Replace shouldDisablePrevButton with your condition
              <img
                src="/images/left-arrow-disabled.png" // Provide the path to your disabled button image
                alt="Previous"
              />
            ) : (
              <img src="/images/left-arrow.png" alt="Previous" />
            )}
          </div>

          <div className="col-md-10">
            <div className="client-logo mt-5">
              <ul className="step-menu">
                <Swiper getSwiper={setSwiperr} {...params}>
                  <div>
                    <li
                      key={1}
                      role="button"
                      className="current"
                      onClick={() => {
                        // console.log("clicked");
                        setSelectedImage("/images/flow1.jpg");
                        setDescription("Village Identification");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 1</p>
                      <p>{"Village Identification"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow1.jpg"
                          alt="Village Identification"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={2}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow2.jpg");
                        setDescription("Farmer Group Formation");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 2</p>
                      <p>{"Farmer Group Formation"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow2.jpg"
                          alt="Farmer Group Formation"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={3}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow3.jpg");
                        setDescription("Benificary Identification");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 3</p>
                      <p>{"Benificary Identification"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow3.jpg"
                          alt="Benificary Identification"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={4}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow4.jpg");
                        setDescription("Work Break Down Structure");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 4</p>
                      <p>{"Work Break Down Structure"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow4.jpg"
                          alt="Work Break Down Structure"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={5}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow5.jpg");
                        setDescription("Demand Letter & Approval");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 5</p>
                      <p>{"Demand Letter & Approval"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow5.jpg"
                          alt="Demand Letter & Approval"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={6}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow6.jpg");
                        setDescription("Work Commencement");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 6</p>
                      <p>{"Work Commencement"}</p>
                      <div className="image-container">
                        <img src="/images/flow6.jpg" alt="Work Commencement" />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={7}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow7.jpg");
                        setDescription("Recommendation Letter");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 7</p>
                      <p>{"Recommendation Letter"}</p>
                      <div className="image-container">
                        <img
                          src="/images/flow7.jpg"
                          alt="Recommendation Letter"
                        />
                      </div>
                    </li>
                  </div>
                  <div>
                    <li
                      key={8}
                      role="button"
                      className="current"
                      onClick={() => {
                        console.log("clicked");
                        setSelectedImage("/images/flow8.jpg");
                        setDescription("Social Audit");
                      }}
                      style={{ width: "inherit" }}
                    >
                      <p>Step 8</p>
                      <p>{"Social Audit"}</p>
                      <div className="image-container">
                        <img src="/images/flow8.jpg" alt="Social Audit" />
                      </div>
                    </li>
                  </div>
                </Swiper>
              </ul>
            </div>
          </div>
          <div
            onClick={goNext}
            className="col-md-1 owl-dot"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {nextDisbale ? ( // Replace shouldDisablePrevButton with your condition
              <img
                src="/images/right-arrow-disabled.png" // Provide the path to your disabled button image
                alt="Previous"
              />
            ) : (
              <img src="/images/right-arrow.png" alt="Previous" />
            )}
          </div>

          <div className="container">
            <p style={{ fontSize: "12px", color: "red" }} className="container">
              <i>Note* - Click on Image to view enlarge form</i>
            </p>
            <div className="container">
              {selectedImage && (
                <div className="enlarge_image">
                  <p className="d-flex justify-content-center">{description}</p>
                  <img
                    src={selectedImage}
                    alt={description}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsSwiper;
