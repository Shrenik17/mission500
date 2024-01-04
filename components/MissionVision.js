import React from "react";

const MissionVisionGoal = () => {
  return (
    <>
      <section className="mission-vision-section">
        <div className="container">
          <div className="pb-5">
            <div className="d-flex" style={{ padding: "1rem 0" }}>
              <div
                className="px-3"
                style={{ fontSize: "28px", alignSelf: "center" }}
              >
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <h3 style={{ fontWeight: "400", fontSize: "30px" }}>
                Our Vision
              </h3>
            </div>
            <div style={{ marginLeft: "4rem" }}>
              <ul
                className="mt-3"
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  listStyleType: "circle",
                }}
              >
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    We envision a Maharashtra where every drop of water is
                    valued Where communities thrive without the fear of water
                    scarcity.
                  </li>
                </p>
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    We aspire to transform the state into a model of water
                    sustainabilityy, showcasing the potential of collective
                    action and responsible water stewardship.
                  </li>
                </p>
              </ul>
            </div>
          </div>
          <div className="pb-5">
            <div className="d-flex" style={{ padding: "1rem 0" }}>
              <div
                className="px-3"
                style={{ fontSize: "28px", alignSelf: "center" }}
              >
                <i class="fa fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 style={{ fontWeight: "400", fontSize: "30px" }}>
                Our Mission
              </h3>
            </div>
            <div style={{ marginLeft: "4rem" }}>
              <ul
                className="mt-3"
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  listStyleType: "circle",
                }}
              >
                <p style={{ fontSize: "17px", lineHeight: "32px" }}>
                  <li>
                    {" "}
                    Our mission is to lead the way in water conservation by
                    implementing the Mission500 strategy
                  </li>
                </p>
              </ul>
            </div>
          </div>
          <div>
            <div className="d-flex" style={{ padding: "1rem 0" }}>
              <div
                className="px-3"
                style={{ fontSize: "28px", alignSelf: "center" }}
              >
                <i class="fa fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3 style={{ fontWeight: "400", fontSize: "30px" }}>Our Goals</h3>
            </div>
            <div style={{ marginLeft: "4rem" }}>
              <ul
                className="mt-3"
                style={{
                  fontSize: "22px",
                  lineHeight: "32px",
                  listStyleType: "circle",
                }}
              >
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    Create a water reservoir of 500 Crore liters in each Tehsil
                    of Maharashtra
                  </li>
                </p>
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    Raise under ground water level up to 10 feet, from the
                    surface
                  </li>
                </p>
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    Rejuvenate Rivers,Nallas in rural areas to make flow
                    perennial.
                  </li>
                </p>
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    Ensure availability of water for both Kharif and rabi crops
                  </li>
                </p>
                <p>
                  <li style={{ fontSize: "17px", lineHeight: "32px" }}>
                    Ensure ecological balance.
                  </li>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionVisionGoal;
