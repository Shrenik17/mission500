import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Link from "next/link";

class MixerArea extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     startCounter: false,
  //   };
  // }

  // onVisibilityChange = (isVisible) => {
  //   if (isVisible) {
  //     this.setState({ startCounter: true });
  //   }
  // };

  render() {
    return (
      <div>
        <section className="mixer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h3 style={{ color: "gold" }} className="funslide__text">
                    Your dedication to water conservation and tree planting is
                    inspiring change on a remarkable scale. Every drop saved and
                    tree planted nurtures a brighter, greener future. Your
                    efforts are more than actions; they are a legacy for
                    generations to come. As we witness the transformative power
                    of collective action, let it fuel our resolve to do more, to
                    plant more, and to save more.
                    <br />
                    Together, we're writing a story of hope, resilience, and
                    sustainable abundance. Keep nurturing the Earth; your
                    contributions matter immensely."
                  </h3>
                  {/* <Link href="/contact" className="theme-btn">
                    Join Us
                  </Link> */}
               
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MixerArea;
