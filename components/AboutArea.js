import Link from "next/link";
import React from "react";

const aboutDetails = [

  
  {
    title: "Save, Store, and Share:",
    desc: "Our approach is threefold saving water through efficient usage practices, storing excess water using modern techniques such as cost effective check dams and groundwater recharge, and sharing knowledge to empower communities with actionable insights",
  },
  {
    title: "Community-Centric Action:",
    desc: "We believe that impactful change begins at the grassroots level. Mission500 engages citizens, local leaders, schools, and organizations in workshops, campaigns, and collaborative initiatives, creating a network of water-conscious advocates",
  },
  {
    title: "Innovation and Research:",
    desc: "We are committed to identifying and implementing cutting-edge technologies for water conservation. By partnering with research institutions, experts, and innovators, we aim to find novel solutions that address water scarcity challenges.",
  },
  {
    title: "Policy Advocacy:",
    desc: "Mission500 works closely with policymakers and government bodies to advocate for effective water conservation policies and regulations. Our goal is to drive systemic change that supports sustainable water management practices.",
  },
  {
    title: "Data-Driven Progress:",
    desc: "We emphasize data collection, analysis, and reporting to track water consumption patterns, project impact, and assess the effectiveness of our strategies. This enables us to adapt and optimize our approach for maximum results",
  },
  {
    title: "Crisis Response and Preparedness",
    desc: "Recognizing the urgency of water scarcity during droughts, Mission500 is dedicated to developing emergency response plans and resources that help communities manage and navigate challenging times",
  },
  {
    title: "Inspiring Recognition",
    desc: "We celebrate individuals, organizations, and communities that demonstrate exceptional commitment to water conservation. Through awards, public acknowledgment, and storytelling, we inspire others to join our movement.",
  },
];

const AboutUs = () => {
  return (
    <>
    <section className="mission-vision-section">
        <div className="container">
          <div className="row mt-2" >
            <div className="col">
              <p>
                Mission is a people's movement for water conservation started by
                Dr Ujjwalkumar Chavhan (IRS) in 2017 from Dhamangaon village in
                Chalisgaon tehsil in Jalgaon District of Maharashtra to address
                the problem of drought and floods, which was adversely affecting
                the livelihood of the farmers. It is a community-based,
                decentralized model of water conservation where the villagers
                come together to resolve problems of drought and flood.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-5">
      
        {aboutDetails.map((item, index) => {
          return (
            <div key={index}>
              <h4 style={{ padding: "2rem 0", fontWeight: "500" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "17px", lineHeight: "32px" }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default AboutUs;
