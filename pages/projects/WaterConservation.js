import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import SummeryTable from "@/components/summeryTable";
import React from "react";

const WaterConservation = () => {
  return (
    <Layout pageTitle="Water Conservation">
      <NavOne />
      <PageHeader title="Water Conservation" />
      {/* <MapsSwiper /> */}
      <SummeryTable />
      <Footer />
    </Layout>
  );
};

export default WaterConservation;
