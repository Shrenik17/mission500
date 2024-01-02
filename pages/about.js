import AboutUs from "@/components/AboutArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import React from "react";

const AboutPage = () => {
  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="About" />
      <AboutUs />
      <Footer />
    </Layout>
  );
};

export default AboutPage;
