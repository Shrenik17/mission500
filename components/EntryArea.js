import React, { Component } from "react";
import AnimatedSVG from "./AnimatedSVG";

class EntryArea extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <section
        className="entry-area"
        style={{
          position: "relative",
          // backgroundImage: 'url("/images/water_bg.png")', // Replace with your image path
          // backgroundSize: "cover", // Adjust as needed
          // backgroundPosition: "center center",
          // marginLeft: "50px",
          // zIndex: "-1",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            right: 0,
            bottom: 0,
          }}
        >
          <AnimatedSVG />
        </div>
        <div className="container">
          <div className="row entry-static-wrap">
            <div className="col-lg-3" style={{ zIndex: 999 }}>
              <div className="entry-static-box entry-static-box1">
                <div className="section-icon">
                  {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
                </div>
                <h4 className="entry__title">
                  Preserve Every Drop, Secure Tomorrow's Oasis{" "}
                </h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="entry-static-box entry-static-box2 d-flex align-items-centerjustify-content-between">
                <div className="d-flex">
                  <div className="col-lg-4">
                    {/* <div className="entry-video-img"> */}
                    <div className="video-responsive">
                      <iframe
                        width="853"
                        height="480"
                        src="https://www.youtube.com/embed/X93Y3-f37Fk"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                        className="rounded"
                      ></iframe>
                      {/* </div> */}
                    </div>
                  </div>
                  <div
                    className="col-lg-8"
                    style={{
                      // backgroundImage: 'url("/images/water_bg.png")', // Replace with your image path
                      backgroundSize: "cover", // Adjust as needed
                      backgroundPosition: "center center",
                      marginLeft: "50px",
                    }}
                  >
                    <div className="entry-video-text">
                      <h4 className="entry__title">
                        Let’s bring prosperity together.
                      </h4>
                      
                      <p className="entry__text">
                        Watch us how we plan to save water!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EntryArea;
