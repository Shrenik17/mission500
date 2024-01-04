import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getMember } from "@/api/about";

const TeamArea = () => {
  const [temaData, setTeamData] = useState([]);
  let length = 0;
  const getData = async () => {
    let response = await getMember();
    setTeamData(response.data);
    length = response.data.length;
    console.log("get members response", length);
  };
  useEffect(() => {
    getData();
  }, []);

  const startIndex = 1; // Index of the first element you want to include
  const endIndex = temaData.length; // Set endIndex to the last index value

  const slicedData = temaData.slice(startIndex, endIndex);

  return (
    <section className="team-area text-center" id="our_team">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2 className="section__title">Our Team</h2>
              {/* <p className="section__meta">meet profesionals</p> */}
            </div>
          </div>
        </div>
        <div className="row team-content-wrap justify-content-center">
          {temaData.slice(0, 1).map((item, index) => {
            const isEven = index % 2 === 0;
            const teamItemClass = isEven ? "team-item1" : "team-item2";
            console.log(item);
            return (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className={`team-item ${teamItemClass}`}>
                  <div className="team__img">
                    <img
                      src={item.memberPhoto_path}
                      width={270}
                      height={295}
                      alt="team image"
                    />
                  </div>
                  <div style={{width:"300px"}} className="team__title">
                    <h3 style={{color:"white"}} className="team__title-title">
                      {item.memberName}
                    </h3>
                    <p style={{ color: "white", fontSize: "12px" }}>
                      {item.memberProfession}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row team-content-wrap justify-content-between">
          {slicedData.map((item, index) => {
            const isEven = index % 2 === 0;
            const teamItemClass = isEven ? "team-item1" : "team-item2";
            return (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className={`team-item ${teamItemClass}`}>
                  <div className="team__img">
                    <img
                      src={item.memberPhoto_path}
                      width={270}
                      height={295}
                      alt="team image"
                    />
                  </div>
                  <div className="team__title">
                    <h3  style={{color:"white"}} className="team__title-title">
                   
                        {item.memberName}
                     
                    </h3>
                    <p style={{ color: "white", fontSize: "11px" }}>
                      {item.memberProfession}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
