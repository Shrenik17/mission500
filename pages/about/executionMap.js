import React, { useState ,useEffect } from "react";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import NewsContent from "@/components/News";
import Footer from "@/components/Footer";
import MapsSwiper from "@/components/MapSwiper";
import Requirement from "@/components/Requirement";



const ExecutionMap = () => {
  // const images = [
  //   {
  //     src: "/images/flow1.jpg",
  //     alt: "Step 1",
  //     description: "Village Identification",
  //   },
  //   {
  //     src: "/images/flow2.jpg",
  //     alt: "Step 2",
  //     description: "Farmer Group Formation",
  //   },
  //   {
  //     src: "/images/flow3.jpg",
  //     alt: "Step 3",
  //     description: "Benificary Identification",
  //   },
  //   {
  //     src: "/images/flow4.jpg",
  //     alt: "Step 4",
  //     description: "Work Break Down Structure",
  //   },
  //   {
  //     src: "/images/flow5.jpg",
  //     alt: "Step 5",
  //     description: "Demand Letter & Approval",
  //   },
  //   {
  //     src: "/images/flow6.jpg",
  //     alt: "Step 6",
  //     description: "Work Commencement",
  //   },
  //   {
  //     src: "/images/flow7.jpg",
  //     alt: "Step 7",
  //     description: "Recommendation Letter",
  //   },
  //   {
  //     src: "/images/flow8.jpg",
  //     alt: "Step 8",
  //     description: "Social Audit",
  //   },
  //   // Add more image objects here
  // ];

  // const [selectedImage, setSelectedImage] = useState(null);
  // const [description, setDescription] = useState("");

  // const handleImageClick = (imageSrc, imageDescription) => {
  //   setSelectedImage(imageSrc);
  //   setDescription(imageDescription);
  // };
  // useEffect(() => {
      
  //   var angleStart = -360;

  //   function rotate(li, d) {
  //     $({ d: angleStart }).animate({ d: d }, {
  //       step: function (now) {
  //         $(li)
  //           .css({ transform: 'rotate(' + now + 'deg)' })
  //           .find('label')
  //           .css({ transform: 'rotate(' + (-now) + 'deg)' });
  //       }, duration: 0
  //     });
  //   }

  //   function toggleOptions(s) {
  //     $(s).toggleClass('open');
  //     var li = $(s).find('li');
  //     var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
  //     for (var i = 0; i < li.length; i++) {
  //       var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
  //       $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
  //     }
  //   }

  //   $('.selector button').click(function (e) {
  //     toggleOptions($(this).parent());
  //   });

  //   setTimeout(function () { toggleOptions('.selector'); }, 100);

  // }, []);

  return (
    <Layout pageTitle="Execution Map">
      <NavOne />
      <PageHeader title="Execution Map" />
     <Requirement /> 
      <Footer />
    </Layout>
    
  );
};  

export default ExecutionMap;
