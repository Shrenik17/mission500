import React, { useState, useEffect } from "react";
import { getAllProjects } from "@/api/project";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const Education = () => {
  const [projects, setProjects] = useState([]);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [openTooltip, setOpenToolTip] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await getAllProjects();
      console.log(response);
      setProjects(response);

      // Extract unique years with projects of type "Tree Plantation"
      const uniqueYears = [...new Set(response.filter(project => project.type === "Education").map(project => project.projectYear))];
      setYears(uniqueYears);

      // Set the default selected year to the most recent year
      if (uniqueYears.length > 0) {
        setSelectedYear(Math.max(...uniqueYears));
      }
    };

    getData();
  }, []);

  const filterProjectsByTypeAndYear = (type, year) =>
    projects.filter((project) => project.type === type && project.projectYear === year);
    
    const toggleTooltip = () => {
      setOpenToolTip(!openTooltip);
    };
  
    const closeTooltip = (e) => {
      e.stopPropagation();
      setOpenToolTip(false);
    };
  return (
    <Layout pageTitle="Education">
      <NavOne />
      <PageHeader title="Education" />
      {years.length === 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center p-4">
          <p>
            We appreciate your interest in our work. Details will be published
            soon.
          </p>
          <span>
            <p>Thanks for visiting us again</p>
          </span>
        </div>
      ) : (
        <div className="col-md-12">
          <div className="card mt-4">
            <div className="card-header">
              <ul className="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded">
                {years &&
                  years.map(
                    (year, index) =>
                      filterProjectsByTypeAndYear("Education", year)
                        .length > 0 && (
                        <li className="nav-item" key={index}>
                          <button
                            className={`nav-link tabs_list ${
                              year === selectedYear ? "active" : ""
                            }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => setSelectedYear(year)}
                          >
                            Year {year}
                          </button>
                        </li>
                      )
                  )}
              </ul>
            </div>
            <div className="card-body" style={{ padding: "0 1.25rem" }}>
              <div className="tab-content text-center">
                <div className="d-flex">
                  {selectedYear &&
                    filterProjectsByTypeAndYear(
                      "Education",
                      selectedYear
                    ).map((project, index) => (
                      <div className="tab-pane active" key={index}>
                        <div className="d-flex">
                          <div
                            className="card card_image"
                            style={{ width: "18rem" }}
                          >
                            <Link href={project.projectLink} target="_blank">
                              <img
                                src={project.imagePath}
                                className="card-img-top"
                                alt="..."
                              />
                            </Link>

                            <div className="card-body">
                              <h5 style={{fontWeight:400}} >{project.title}</h5>
                              {expanded ? (
                                <p>{project.shortDesc}</p>
                              ) : (
                                <>
                                  <p>
                                    {project.shortDesc.slice(0, 50)}...
                                    <span>
                                      {project.shortDesc.length > 50 && (
                                        <li
                                          className="tooltip-container"
                                          onClick={toggleTooltip}
                                        >
                                          More
                                          {openTooltip && (
                                            <span
                                              className="tooltipa"
                                              onClick={(e) =>
                                                e.stopPropagation()
                                              }
                                            >
                                              <button
                                                className="close-button"
                                                // onClick={closeTooltip}
                                                onClick={(e) => closeTooltip(e)}
                                              >
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  x="0px"
                                                  y="0px"
                                                  width="10"
                                                  height="10"
                                                  viewBox="0 0 50 50"
                                                >
                                                  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                                </svg>

                                                {/* <img src="../../public/images/close.png" alt="close icon" /> */}
                                              </button>
                                              {openTooltip && (
                                                <span className="tooltip-content">
                                                  {project.shortDesc}
                                                </span>
                                              )}
                                              {/* {project.shortDesc} */}
                                            </span>
                                          )}
                                        </li>
                                      )}
                                    </span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  );
};

export default Education;
