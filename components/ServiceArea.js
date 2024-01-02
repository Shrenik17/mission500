import Link from "next/link";
import React, { useState, useEffect } from "react";
import data from "../data.json";
const ServiceArea = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // Set the default selected year to the last year in the data array
    const lastYear = data[data.length - 1].YEAR;
    setSelectedYear(lastYear);
  }, []);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };



  return (
    <section className="service-area text-center" id="our_journey">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading service-heading">
              <div className="section-icon">
                {/* <img src="/images/section-icon.png" alt="section-icon" /> */}
              </div>
              <h2 className="section__title">
                We Believe that “Together we can conserve more Water” for our
                sustainable future.
              </h2>
            </div>
          </div>
        </div>
        <div className="row service-wrap">
          <div className="col">
            <div className="service-item service-item1">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-peace-1"></i> */}
                  <i className="fa fa-group fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Farmers Contribution (Rs)</h4>
                  <h6 className="service__title">3,11,43,775</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item2">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-praying"></i> */}
                  <i className="fa fa-home fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Villages</h4>
                  <h6 className="service__title" style={{ marginTop: "41px" }}>
                    106
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item3">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-peace"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="4em"
                    viewBox="0 0 640 512"
                    style={{ fill: "#424242" }}
                  >
                    <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z" />
                  </svg>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Districts</h4>
                  <h6 className="service__title" style={{ marginTop: "41px" }}>
                    12
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="service-item service-item4">
              <div className="service-item-inner">
                <div className="service-icon">
                  {/* <i className="icon-heart"></i> */}
                  <i className="fa fa-tint fa-flip" aria-hidden="true"></i>
                </div>
                <div className="service-content">
                  <h4 className="service__title">Cr lt of water</h4>
                  <h6 className="service__title" style={{ marginTop: "41px" }}>
                    337
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-timeline">
        <div
        className="overflow-x-auto p-3"
        style={{
          border: "1.5px solid black",
          borderRadius: "10px",
          margin: "1rem ",
          maxWidth: "100%",
        }}
      >
      <div className="table-responsive">

  
        <table className="table table-xs summery_table_heading">
          <thead>
            
            <tr>
              <th>
                <h6
                  style={{
                    color: "#007bff",
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  Years
                </h6>
              </th>
              {data.map((item, index) => (
                <th
                  key={index}
                  style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontWeight: 600,
                  }}
                  onClick={() => {
                    handleYearClick(item.YEAR);
                    setSelectedItem(item.YEAR);
                    scrollToMaps();
                  }}
                >
                  <a
                    href={`https://mission500mh.com/${item.YEAR}-Projects`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    {item.YEAR}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                <span
                  style={{
                    color: "blue",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  ▪
                </span>
                Villages Count
              </td>
              {data.map((item, index) => (
                <td
                  key={index}
             
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {item.NUMBER_OF_VILLAGES}
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    color: "orange",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  ▪
                </span>
                Invested Hours
              </td>
              {data.map((item, index) => (
                <td
                  key={index}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {item.NO_OF_HOURS}
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    color: "grey",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  ▪
                </span>
                Farm Con(Rs.)
              </td>
              {data.map((item, index) => (
                <td
                  key={index}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {item.CONTRIBUTION_BY_FARMERS  }
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    color: "yellow",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  ▪
                </span>
                Spo Count(Rs.)
              </td>
              {data.map((item, index) => (
                <td
                  key={index}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {item.CONTRIBUTION_FROM_SPONSER}
                </td>
              ))}
            </tr>
            <tr>
              <td>
                <span
                  style={{
                    color: "green",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                >
                  ▪
                </span>
                Reservoir (Cr. Ltr)
              </td>
              {data.map((item, index) => (
                <td
                  key={index}
                  style={{ textAlign: "center", verticalAlign: "middle" }}
                >
                  {item.RESERVOIR_CREATED_IN_CRORE_LITRE}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        </div>
      </div>
        </section>
      </div>
    </section>
  );
};

export default ServiceArea;
