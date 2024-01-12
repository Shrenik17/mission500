
import React, { useState, useEffect } from "react";

const Requirement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      toggleOptions();
    }, 100);
  }, []);

  return (
    <div className="container">
      <div className={`selector ${isOpen ? "open" : ""}`}> 
      {/* expressions inside strings. */}
        <ul>
          <li>
            <input id="1" type="checkbox" />
            <label htmlFor="1">
              1. Village Selection
              <img
                style={{
                  right: "15px",
                  top: "43px",
               }}
                className="img"
                src="/images/map1.png"
                alt="Map"
              />
            </label>
            <div
              style={{
                transform: `rotate(${isOpen ? 0 : -360}deg)`,
                left: "145px",
                top: "-256px",
              }}
              className={`hide ${isOpen ? "show" : ""}`}
            >
              <b>Village selection</b> involves two distinct methods:
              <br />
              <b>1. Direct Selection by Paach Patil:</b>
              <br />
              The Paach Patil employs this method when identifying villages
              facing drought or water scarcity. The direct assessment of the
              prevailing conditions guides the selection process, allowing for
              immediate attention to areas in need.
              <br />
              <b>2. Community-driven Selection: </b>
              <br />
              In this approach, residents from regions susceptible to drought
              actively engage with The Paach Patil. Following a thorough
              evaluation of the villagers' commitment and dedication, The Paach
              Patil then makes informed decisions regarding the selection of
              villages. This collaborative process ensures that the chosen
              villages are not only in need but also possess a community-driven
              spirit for effective intervention.
            </div>
          </li>
          <li>
            <input id="2" type="checkbox" />
            <label htmlFor="2">
              2. Farmer Group Formation
              <img
                div
                style={{
                  right: "-38px",
              top: "-55px",
                }}
                className="img"
                src="/images/map2.png"
                alt="image"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                left: "161px",
               top: "-226px",
              }}
           className="hide"
            >
              After the meticulous selection of a village, the initiation of
              water conservation awareness becomes paramount.
              <br />
              <b> A Village Head (Gao Pramukh)</b>, chosen by Paach Patil based
              on willingness and commitment, emerges as the linchpin between the
              Paach Patil team and the villagers. <br />
              Further amplifying the grassroots impact, the
              <b>Village Head</b> appoints{" "}
              <b>- a team of 5 Village Coordinators</b> (Gao Samanvayaks). These
              coordinators operate at the micro-level, focusing on Shivar areas.{" "}
              <br />
              This structured hierarchy ensures efficient execution and
              sustained enthusiasm in the vital mission of water conservation.
            </div>
          </li>
          <li>
             <input id="3" type="checkbox" />
            <label
          
              htmlFor="3"
            >
              3 Responsibility Assignment
              <img
                style={{
                               right: "-26px",
                   top: "-51px",
                }}
                className="img"
                src="/images/map3.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                left: "155px",
                  top: "-122px",
              }}
              className="hide"
            >
              Upon Farmer group formation, responsibility assignments are
              designated to ensure a streamlined and impactful approach:
              <b>1. Village Head (Gao Pramukh):</b>
              <br /> <b>1. Role:</b> Acts as the primary coordinator between the
              Paach Patil team and villagers. <br />
              <b>2. Responsibilities:</b> <br />
              1.General supervision of the work.
              <br /> 2.Creation of awareness in collaboration with enthusiastic
              farmers.
              <br /> 3.Documentation management.
              <b>
                2. Inclusion in Mission 500's 'Village Head' WhatsApp Group:
              </b>{" "}
              <br />
              <b>1. Purpose:</b> Real-time communication and knowledge exchange.{" "}
              <br />
              <b>2.Benefits: </b>
              1. Daily updates on project status and accrued benefits. <br />
              2. Support for new Village Heads, fostering confidence and
              motivation. <br />
              <b>Village Coordinators (Gao Samanvayaks - Team of 5):</b> <br />
              <b>1. Selection:</b> Appointed by the Village Head. <br />{" "}
              <b>2.Responsibilities:</b> <br />
              1. Micro-level coordination in the Shivar area. <br />
              2. Creation of awareness among neighboring farmers. <br />
              3. Motivation for participation in water conservation. <br />{" "}
              4.Management of water and food provisions for machine operators.{" "}
              <br /> 5. Coordination with farmers for diesel logistics. <br />{" "}
              6. Supervision of work on their farms and adjacent areas. <br />
              <br /> This precise assignment of roles ensures a cohesive and
              effective execution of water conservation efforts, with each
              member playing a crucial part in achieving the overarching
              mission.
            </div>
          </li>
          <li>
            <input id="4" type="checkbox" />
            <label htmlFor="4">
              4. Work Planning
              <img
                style={{
                  right: "10px",
                  top: "35px",
                }}
                className="img"
                src="/images/map4.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                left: "156px",
                bottom: "169px",
              }}
              className="hide"
            >
              <b> Work Planning</b> is a crucial stage in terms of Compiling a
              list of farmers willing to spend on diesel, detailing name, group
              number, mobile number, estimated demand hours, equipment needed,
              and nature of work. <br /> How individual oversees general work
              supervision, spearheads awareness campaigns, and manages
              documentation tasks, fostering collaboration and information
              sharing, <br />
              This stage includes vital as motivates participation by
              elucidating the collective benefits. Sense of joint
              responsibilities extend to managing water and food provisions for
              machine operators, coordinating diesel logistics, and supervising
              work on their farms and adjacent areas
            </div>
          </li>
          <li>
            <input id="5" type="checkbox" />
            <label htmlFor="5">
              5. Demand Letter
              <img
                style={{
                  right: "1px",
                  top: "26px",
                }}
                className="img"
               src="/images/map5.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                left: "120px",
                bottom: "132px",
              }}
              className="hide"
            >
              <b> A Demand Letter </b> is a formal document often serves as a
              formal requisition for resources, funds, or specific services
              required for the successful execution of a project or initiative.
              This letter outlines the precise needs and expectations, including
              details such as quantities, specifications, and any pertinent
              timelines. <br />
              Upon the submission of a Demand Letter, the{" "}
              <b> Approval Process </b> comes into play. This involves a careful
              review of the request by relevant authorities or decision-makers.
              The approval process ensures that the requested resources align
              with the project's objectives, budget, and overall strategic
              goals. <br />
              Approvals may be granted based on various criteria, such as
              feasibility, budget availability, and compliance with
              organizational policies. In essence, the Demand Letter initiates
              the formal request, while the Approval Process validates and
              authorizes the fulfillment of that request. Together, they form a
              critical component of project management, accountability, and
              adherence to mission standards
            </div>
          </li>
          <li>
            <input id="6" type="checkbox" />
            <label htmlFor="6">
              6. Work Commencement
              <img
                style={{
                  right: "-34px",
                  top: "-55px",
                }}
                className="img"
                src="/images/map6.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                right: "-30px",
                bottom: "164px",
              }}
              className="hide"
            >
              <b> Work Commencement </b> marks a pivotal moment in any project
              symbolizing the transition from planning to execution. It is the
              point where strategies, ideas, and preparations transform into
              tangible actions, propelling the project forward. This phase
              involves the activation of resources, teams, and processes
              identified during the planning stage. The Work Commencement
              process typically includes the following key elements: <br />
              <b>
                1.Inauguration: <br /> 2.Resource Activation:
                <br /> 3.Communication and Coordination:
                <br /> 4.Execution of Initial Tasks: <br /> 5.Monitoring and
                Adjustment:{" "}
              </b>
              <br /> <br />
              Work Commencement is a dynamic and energizing phase that
              transforms aspirations into tangible accomplishments. It embodies
              the spirit of progress and sets the momentum for a successful
              project journey.
            </div>
          </li>
          <li>
            <input id="7" type="checkbox" />
            <label htmlFor="7">
              7. Work Measurment
              <img
                style={{
                  right: "14px",
                  top: "40px",
                  width: "34px",
                  height: "44px",
                }}
                className="img"
                src="/images/map7.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                right: "-26px",
                top: "-114px",
              }}
              className="hide"
            >
              <b> Work Measurement</b> is a systematic approach employed to
              quantify and assess the performance and efficiency of tasks within
              a project or organizational context. It involves the application
              of various techniques to gauge the amount of time, effort, or
              resources expended on specific activities. The primary objectives
              of work measurement are to enhance productivity, allocate
              resources judiciously, and establish benchmarks for continuous
              improvement. <br />
              Key Components of Work Measurement: <br />{" "}
              <b>
                {" "}
                1.Time Analysis: <br /> 2.Task Standardization: <br />{" "}
                3.Resource Allocation: <br />
                4.Performance Metrics: <br />
                5.Continuous Improvement:
              </b>{" "}
              <br /> <br /> In essence, work measurement provides a structured
              framework for evaluating, standardizing, and optimizing work
              processes, fostering a culture of efficiency and continuous
              enhancement within a project.
            </div>
          </li>
          <li>
            <input id="8" type="checkbox" />
            <label htmlFor="8">
              8. Recommendation Letter
              <img
                style={{
                  right: "-35px",
                  top: "-48px",
                }}
                className="img"
                src="/images/map8.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                right: "-16px",
                top: "-167px",
              }}
              className="hide"
            >
              A <b> Recommendation Letter </b> is a formal document in order to
              attest the project details, achievements and other attributes.
              This letter serves as a testament to the project accomplishment
              and suitability for the defined endeavour. <br /> Key Components
              of a Recommendation Letter: <br />{" "}
              <b>
                1. Introduction <br />
                2. Project Highlights <br />
                3. Achievements <br /> 4. Contributions <br />
                5. Recommendation{" "}
              </b>{" "}
              <br /> Recommendation letters play a crucial role in influencing
              decisions about clearing the outstandings and visibility on
              project status. Well-crafted and sincere letters can significantly
              contribute to a positive impression of the project.
            </div>
          </li>
        
          <li>
            <input id="9" type="checkbox" />
            <label htmlFor="9">
              9. Social Audit
              <img
                style={{
                  right: "6px",
                  top: "41px",
                }}
                className="img"
                src="/images/map9.png"
              />
            </label>
            <div
              style={{
                transform: "rotate(0deg)",
                left: "-380px",
                top: "-236px",
              }}
              className="hide"
            >
              <b> Social Audit </b> is a comprehensive process designed to
             evaluate and assess the social impact and ethical practices of a
              project. It goes beyond financial considerations, focusing on how
              an entity or a group contributes to the well-being of society, the
              environment, and stakeholders. Social audit aims to ensure
              transparency, accountability, and ethical conduct, aligning the
              mission’s activities with social responsibility. <br /> Key
              Components of a Social Audit: <br />{" "}
              <b>
                1. Stakeholder Engagement <br /> 2.Social Impact Assessment{" "}
                <br /> 3.Ethical Practices <br />
                4. Transparency and Disclosure <br />
                5. Compliance and Accountability <br />
                6. Continuous Improvement <br />
                7. Reporting{" "}
              </b>{" "}
              <br /> Social audit plays a crucial role in promoting social
              responsibility and sustainability. By evaluating and enhancing the
              social impact of project, it contributes to building a more
              ethical, responsible, and accountable environment.
            </div>
          </li>
          
        </ul>
        <button onClick={toggleOptions}>Mission500 Execution Map</button>
      </div>
    </div>
  );
};

export default Requirement;
