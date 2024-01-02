import AboutArea from "@/components/AboutArea";
import BlogHome from "@/components/BlogHome";
import ClientsLogo from "@/components/ClientsLogo";
import EventCard from "@/components/EventCard";
import FaqArea from "@/components/FaqArea";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import MissionVision from "@/components/MissionVision";
import MixerAreaTwo from "@/components/MixerAreaTwo";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import TeamArea from "@/components/TeamArea";
import React, { Component } from "react";

class Blogs extends Component {
  render() {
    return (
      <Layout pageTitle="Mission 500 | Blogs">
        <NavOne />
        <PageHeader title="Blogs" />
        <BlogHome />
        <Footer />
      </Layout>
    );
  }
}

export default Blogs;
