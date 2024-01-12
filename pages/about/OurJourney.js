
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";

const OurJourney = () => {
  const [milestone, setMilestone] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const milestones = [
    {
      name: "Conception",
      content:
        "This concept of watershed development through people's participation started in the year 2017 in Dhamangaon Village. The 14 crore liter surface water reservoir  was created in the first year itself.",
    },
    {
      name: "Pilot",
      content:
        "This concept was tested in 6 more villages in 2018 to see whether farmers can come together for this work in a couple of village meetings. Farmers responded well and a reservoir of 20 crore liters was created.",
    },
    {
      name: "LeaderShip",
      content:
        "Expansion of this project to further villages requires trained leadership. 14 people were trained in 2019-20 for 9 months on the lines of the 'Landmark forum program.' They took responsibility for 5 villages each, therefore called 'Pach patil'. They work without any remuneration. Work was expanded to 16 villages. Storage capacity reached up to 1.02 Billion liters.",
    },
    {
      name: "Expansion",
      content:
        "In 2021-22, this model replicated in 70 villages in 7 districts and created a storage capacity of 450 Crore liters. Mission Titur River cleaning- Chalisgaon city was flooded 8 times in monsoon of 2021. Through collaboration of NGO/CSR and people's participation, 1500 dumper silt was removed from the 7 KM stretch of the river in the city.",
    },
    {
      name: "Replication",
      content:
        "The project reached up to 34 villages in 4 tehsils in 4 districts of Maharashtra and crossed the storage capacity of 2.08 Billion liters in 2020-21. Number of NGOs supporting this project expanded to 4 viz Sakal Relief Fund, Rotary Club, Bhartiya Jain Sanghatana and NAAM Foundation..",
    },
  ];

  const handleClick = (item) => {
    setMilestone(item);
    setSelectedItem(item.name);
  };

  return (
    <Layout pageTitle="Mission 500 | About">
      <NavOne />
      <PageHeader title="Our Journey" />
      <div className="mb-5">
        <div className="d-flex flex-column m-4">
          <div className="d-flex justify-content-around">
            <div className="d-flex">
              <div>
                <h3 style={{ fontWeight: "400" }}>Milestone's</h3>
                <div
                  className="p-4 ml-3"
                  style={{
                    border: "2px solid grey",
                    borderRadius: "12px",
                    height: "fit-content",
                    width: "max-content",
                  }}
                >
                  {milestones.map((item, index) => (
                    <ul className="d-flex justify-content-evenly" key={index}>
                      <li
                        onClick={() => handleClick(item)}
                        style={{
                          cursor: "pointer",
                          fontWeight:
                            selectedItem === item.name ? "bold" : "normal", // Apply bold style when selected
                          fontSize: selectedItem === item.name && "18px",
                        }}
                      >
                        - {item.name}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div>
                {Object.keys(milestone).length != 0 && (
                  <div class="container mt-4">
                    <div class="card" style={{ width: "18rem;" }}>
                      <div class="card-body">
                        <div className="d-flex justify-content-between">
                          <h5 style={{ fontWeight: "400" }} class="card-title">
                            {milestone.name}
                          </h5>
                          <p
                            onClick={() => {
                              setMilestone({});
                              setSelectedItem(null);
                            }}
                            style={{ cursor: "pointer", fontWeight: "400" }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              class="css-i6dzq1"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </p>
                        </div>
                        <p style={{ fontWeight: "400" }} class="card-text">
                          {milestone.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Image
              src="/images/journey.png"
              width={800}
              height={500}
              className="border border-4"
            />
          </div>
          <section className="section-timeline">
            <div style={{position: "relative",  left: "21%"}} className="d-flex justify-content-start my-3">
          
              <h3 style={{fontWeight:"400"}} >Achievements</h3>
            </div>
            <div
              id="horizontal-timeline"
              className="timeline horizontal reverse"
            >
              <div className="block">
                <div
                  className="square up "
                  style={{
                    borderLeft: "2px solid rgb(176, 7, 7)",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 1</p>
                  <p>Capacity : 14 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "rgb(176, 7, 7)",
                  }}
                >
                  <p>2018</p>
                </div>
                <div className="link"></div>
                <div className="square down blank "></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#ff5e33",
                  }}
                >
                  <p>2019</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #ff5e33",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 7</p>
                  <p>Capacity : 11 Cr</p>
                </div>
              </div>
              <div className="block">
                <div
                  className="square up"
                  style={{
                    borderLeft: "2px solid #6234ed",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 14</p>
                  <p>Capacity : 27 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#6234ed ",
                  }}
                >
                  <p>2020</p>
                </div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#2f903c ",
                  }}
                >
                  <p>2021</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #2f903c",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 19</p>
                  <p>Capacity : 27 Cr</p>
                </div>
              </div>
              <div className="block">
                <div
                  className="square up"
                  style={{
                    borderLeft: "2px solid #34f50c",
                    marginLeft: "20px",
                  }}
                >
                  <p>Villages : 44</p>
                  <p>Capacity : 126 Cr</p>
                </div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#34f50c ",
                  }}
                >
                  <p>2022</p>
                </div>
                <div className="link"></div>
                <div className="square down blank"></div>
              </div>
              <div className="block">
                <div className="square up blank"></div>
                <div
                  className="circle"
                  style={{
                    backgroundColor: "#2f903c ",
                  }}
                >
                  <p>2023</p>
                </div>
                <div className="link"></div>
                <div
                  className="square down"
                  style={{
                    borderLeft: "2px solid #34f50c",
                    marginLeft: "20px",
                    paddingTop: "2.5rem",
                  }}
                >
                  <p>Villages : 62</p>
                  <p>Capacity : 132 Cr</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default OurJourney;


