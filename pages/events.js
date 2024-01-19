import {
  getAllEventsNews,
  getInfoByYearAndEvent,
  getYearBYEvent,
} from "@/api/media";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Events = () => {
  const [mediaData, setMediaData] = useState();
  const [responseType, setResponseType] = useState("false");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [eventType, setEventType] = useState("news");
  const [expanded, setExpanded] = useState(false);
  const [openTooltip, setOpenToolTip] = useState(false);

  // const toggleExpand = () => {
  //   setExpanded(!expanded);
  // };

  const handleToggle = () => {
    // Toggle the button text
    if (eventType === "news") {
      setEventType("events");
    } else {
      setEventType("news");
    }
  };
  // console.log("button name", eventType);
  useEffect(() => {
    const getYear = async () => {
      const response = await getYearBYEvent(eventType);
      const sortedYears = response.data.sort((a, b) => b - a);
      console.log("years", response.data);
      //setYears(response.data);
      setYears(sortedYears);
    };
    getYear();
  }, [eventType]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllEventsNews();
      console.log(response);
    
      setMediaData(response);
    };
    getData();
  }, []);
  // console.log("media data", mediaData);
  useEffect(() => {
    const getData = async () => {
      // console.log("event", eventType, "year", years[0]);
      const response = await getInfoByYearAndEvent(years[0], eventType);
      console.log("-----------", response);
      setMediaData(response.data);
      setSelectedYear(years[0]);
      if (response.type) {
        setResponseType("true");
      }
    };
    getData();
  }, [years, eventType]);

  const handleYearButtonClick = async (year) => {
    const response = await getInfoByYearAndEvent(year, eventType);
    setMediaData(response.data);
    if (response.type) {
      setResponseType("true");
    }
    setSelectedYear(year);
  };

  const toggleTooltip = () => {
    setOpenToolTip(!openTooltip);
  };

  const closeTooltip = (e) => {
    e.stopPropagation();
    setOpenToolTip(false);
  };

  //console.log("Media Data", openTooltip);
  return (
    <Layout pageTitle="Mission 500 | Media">
      <NavOne />
      <PageHeader title="Events & News" />
      <div className="d-flex justify-content-end p-3 px-4">
        <span style={{ margin: "5px" }}>NEWS</span>
        <label className="switch">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
        <span style={{ margin: "5px" }}>EVENTS</span>
      </div>

      <div className="col-md-12">
        <div className="card mt-4">
          <div className="card-header">
            <ul className="nav nav-tabs nav-tabs-neutral justify-content-start shadow p-3 mb-5 bg-body rounded">
              {years &&
                years.map((year, index) => (
                  <li className="nav-item" key={index}>
                    <button
                      className={`nav-link tabs_list ${
                        year === selectedYear ? "active" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleYearButtonClick(year)}
                    >
                      Year {year}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="card-body" style={{ padding: "0 1.25rem" }}>
            <div className="tab-content text-center">
              <div className="d-flex">
                {mediaData &&
                  mediaData.map((event, index) => (
                    // mediaData.events.map((event, index)
                    <div className="tab-pane active" key={index}>
                      <div className="d-flex">
                        <div
                          className="card card_image"
                          style={{ width: "18rem" }}
                        >
                         
                            <img
                              src={event.imagePath}
                              className="card-img-top"
                              alt="..."
                            ></img>
                        
                          <div className="card-body">
                            <h5 style={{fontWeight:400}}>{event.title}</h5>
                            {expanded ? (
                              <p>{event.shortDesc}</p>
                            ) : (
                              <>
                                <p>
                                  {event.shortDesc.slice(0, 50)}...
                                  <span>
                                    {event.shortDesc.length > 50 && (
                                      <li
                                        className="tooltip-container"
                                        onClick={toggleTooltip}
                                      >
                                        More
                                        {openTooltip && (
                                          <span
                                            className="tooltipa"
                                            onClick={(e) => e.stopPropagation()}
                                          >
                                            <button
                                              className="close-button"
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
                                            </button>
                                            {openTooltip && (
                                              <span className="tooltip-content">
                                                {event.shortDesc}
                                              </span>
                                            )}
                                          </span>
                                        )}
                                      </li>
                                    )}
                                  </span>
                                </p>
                              </>
                            )}
                            <p>{event.participants}</p>
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
      <Footer />
    </Layout>
  );
};

export default Events;
