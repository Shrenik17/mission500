
import React, { useState, useEffect } from "react";
import data from "../data.json";
import Image from "next/image";
import Link from "next/link";
import LineChart from "@/components/LineChart";

const SummeryTable = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  useEffect(() => {
    // Set the default selected year to the last year in the data array
    const lastYear = data[data.length - 1].YEAR;
    setSelectedYear(lastYear);
  
  }, []);

  const handleYearClick = (year) => {
    setSelectedYear(year);
 
    // setSelectedItem(year);
  };

  const scrollToMaps = () => {
    const element = document.getElementById("maps");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (item) => {
    handleYearClick(item.YEAR);
    setSelectedItem(item.YEAR);
  };

  return (
    <>
      <div className="container">
        <div
          className="overflow-x-auto p-3"
          style={{
            border: "1.5px solid black",
            borderRadius: "10px",
            margin: "1rem",
          }}
        >
          <div className="table-responsive">
            <table className="table table-xs summery_table_heading">
              <thead>
                {/* <tr>
              <th
                style={{
                  // border: "1px solid black",
                  // padding: "8px",
                 
                    //   textAlign: "center",
                //   verticalAlign: "middle",
                //   fontWeight: 200,
                }}
              >
              <div>
                <span className="circle_indicator"
                  style={{
                    backgroundColor: "blue",
                  }}
                ></span>
                  Villages Count
                </div>
                <div>
                <span className="circle_indicator"
                  style={{
                    backgroundColor: "orange",
                  }}
                ></span>
                Invested Hours
                </div>
                <div>
                <span className="circle_indicator"
                  style={{
                    backgroundColor: "grey",
                  }}
                ></span>
               Farm Con(RS.)
                </div>
                <div>
                <span className="circle_indicator"
                  style={{
                    backgroundColor: "yellow",
                  }}
                ></span>
                Spo Count(Rs.)
                </div>
                
                <div>
                <span className="circle_indicator"
                  style={{
                    backgroundColor: "green",
                  }}
                ></span>
                Reservoir(Cr. Ltr)
                </div>
              </th>
              {data.map((item, index) => (
                <th
                  style={{
                    border: "1px solid black",
                    // borderRadius: "10px",
                    padding: "8px",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      display: "flex", // Use flex display to arrange bars side by side
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        height: `${item.NUMBER_OF_VILLAGE / 10}px`,
                        width: "10px",
                        backgroundColor: "blue"
                      }}
                    ></div>
                    <div
                      style={{
                        height: `${item.NO_OF_HOURS / 200}px`,
                        width: "10px",
                        backgroundColor: "orange",
                      }}
                    ></div>
                    <div
                      style={{
                        height: `${item.CONTRIBUTION_BY_FARMERS / 150000}px`,
                        width: "10px",
                        backgroundColor: "grey",
                      }}
                    ></div>
                    <div
                      style={{
                        height: `${item.CONTRIBUTION_FROM_SPONSER / 150000}px`,
                        width: "10px",
                        backgroundColor: "yellow",
                      }}
                    ></div>
                    <div
                      style={{
                        height: `${
                          item.RESERVOIR_CREATED_IN_CRORE_LITRE / 50
                        }px`,
                        width: "10px",
                        backgroundColor: "green",
                      }}
                    ></div>
                  </div>
                </th>
              ))}
            </tr> */}
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
                  <td>
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
                    Farmer Contribution (Rs.)
                  </td>
                  {data.map((item, index) => (
                    <td
                      key={index}
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      {item.CONTRIBUTION_BY_FARMERS}
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
                    Sponser Contribution (Rs.)
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
        <LineChart data={data} />
        {/* 
        <section
          className="d-flex justify-content-around"
          style={{ paddingTop: "0rem" }}
        >
          <div className="col-md-2">
            <div
              className="p-4 border border-2 border-grey rounded-3"
              style={{
                border: "2px solid grey",
                borderRadius: "12px",
                height: "fit-content",
                marginTop: "45px",
              }}
            >
              {data.map((item, index) => (
                <ul className="d-flex justify-content-evenly" key={index}>
                  <li
                    onClick={() => handleClick(item)}
                    style={{
                      cursor: "pointer",
                      fontWeight:
                        selectedItem === item.YEAR ? "bold" : "normal",
                      fontSize: selectedItem === item.YEAR && "18px",
                    }}
                  >
                    - {item.YEAR}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex p-4 justify-content-end">
              <div>
                <p className="mt-3">Year {selectedYear}</p>
              </div>
              {selectedYear && selectedYear == 2023 ? (
                <Image src="/images/map_23.svg" width={700} height={500} />
              ) : selectedYear == 2022 ? (
                <Image src="/images/map_22.svg" width={700} height={500} />
              ) : selectedYear == 2021 ? (
                <Image src="/images/map_21.svg" width={700} height={500} />
              ) : selectedYear == 2020 ||
                selectedYear == 2019 ||
                selectedYear == 2018 ? (
                <Image
                  src="/images/map_18_19_20.svg"
                  width={700}
                  height={500}
                />
              ) : (
                "/"
              )}
            </div>
            <p className="mb-5" style={{ color: "#818181", maxWidth: "100%" }}>
              Government of Maharashtra has renamed ‘Aurangabad’ district as
              ‘Chhatrapati Sambhajinagar’ and ‘Osmanabad’ as ‘Dharashiv’.
            </p>
          </div>
        </section> */}
        <section
          className="d-flex flex-column flex-md-row justify-content-around align-items-center"
          style={{ paddingTop: "0rem" }}
        >
          <div className="col-md-2 mb-3 mb-md-0">
            <div
              className="p-4  border-2 border-grey rounded-3"
              style={{
                border: "2px solid grey",
                borderRadius: "12px",
                height: "fit-content",
                marginTop: "-145px",
              }}
            >
              {data.map((item, index) => (
                <ul className="d-flex justify-content-evenly" key={index}>
                  <li
                    onClick={() => handleClick(item)}
                    style={{
                      cursor: "pointer",
                      fontWeight:
                        selectedItem === item.YEAR ? "bold" : "normal",
                      fontSize: selectedItem === item.YEAR && "18px",
                    }}
                  >
                    - {item.YEAR}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="col-md-8">
            <div className="d-flex flex-column flex-md-row p-4 justify-content-center justify-content-md-end">
              <div className="mb-3 mb-md-0">
                <p className="mt-3">Year {selectedYear}</p>
              </div>
              {selectedYear && selectedYear == 2023 ? (
                <Image
                  src="/images/map_23.svg"
                  width={700}
                  height={500}
                  className="img-fluid"
                />
              ) : selectedYear == 2022 ? (
                <Image
                  src="/images/map_22.svg"
                  width={700}
                  height={500}
                  className="img-fluid"
                />
              ) : selectedYear == 2021 ? (
                <Image
                  src="/images/map_21.svg"
                  width={700}
                  height={500}
                  className="img-fluid"
                />
              ) : selectedYear == 2020 ||
                selectedYear == 2019 ||
                selectedYear == 2018 ? (
                <Image
                  src="/images/map_18_19_20.svg"
                  width={700}
                  height={500}
                  className="img-fluid"
                />
              ) : (
                "/"
              )}
            </div>
            <p className="mb-5" style={{ color: "#818181", maxWidth: "100%" }}>
              Government of Maharashtra has renamed ‘Aurangabad’ district as
              ‘Chhatrapati Sambhajinagar’ and ‘Osmanabad’ as ‘Dharashiv’.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SummeryTable;
