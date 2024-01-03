import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from "@/components/SliderOne";
import EntryArea from "@/components/EntryArea";
import Footer from "@/components/Footer";
import BlogHome from "@/components/BlogHome";
import TeamArea from "@/components/TeamArea";
import ClientsLogo from "@/components/ClientsLogo";
import ServiceArea from "@/components/ServiceArea";
import MixerArea from "@/components/MixerArea";
import HelpingArea from "@/components/HelpingArea";
import HiwArea from "@/components/HiwArea";
import YoutubeCallToAction from "@/components/YoutubeCallToAction";
import CallToActionTwo from "@/components/CallToActionTwo";
import Map from "@/components/Map";

const HomePage = () => {
  return (
    <Layout pageTitle="Mission 500">
      {/* <div className="full-screen-div" id="activeDiv"></div> */}
      <NavOne />
      <SliderOne />
      <ServiceArea />
      <div className="d-flex justify-content-center m-2">
        <div className="entry-video-img">
          <div className="video-responsive">
            <div className="col-md-12">
              <iframe
                width="1200"
                height="4810"
                src="https://www.youtube.com/embed/X93Y3-f37Fk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="rounded"
              ></iframe>
              <div
                className="container"
                style={{ maxWidth : "1200px"  }}
              >
                This is a small documentary on mission 500’s work. The voiceover
                for the documentary is given by Shri Amitabh Baachhan. Mission
                500’s Paach Patil team acknowledges his contribution in the
                expansion of this people’s movement.
              </div>
              <div className="entry-video-text">
                <h2 className="entry__title d-flex justify-content-center p-4">
                  Let’s bring prosperity together!
                </h2>
                {/* <p className="entry__text">
                  Watch us how we plan to save water!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <HiwArea />
      <MixerArea />
      {/* <HelpingArea />
      <TeamArea /> */}
      {/* <EntryArea /> */}
      <ClientsLogo />
      {/* <YoutubeCallToAction /> */}
      {/* <BlogHome /> */}
      {/*<Map />
      <CallToActionTwo /> */}
      <Footer />
    </Layout>
  );
};

export default HomePage;
