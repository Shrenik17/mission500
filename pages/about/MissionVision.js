import AboutUs from "@/components/AboutArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVisionGoal from "@/components/MissionVision";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import React from "react";

const MissionVision = () => {
  return (
    <Layout pageTitle="Mission 500 | Mission Vission">
      <NavOne />
      <PageHeader title="Our Vision, Mission & Goals" />
      <MissionVisionGoal />
      <Footer />
    </Layout>
  );
};

export default MissionVision;
