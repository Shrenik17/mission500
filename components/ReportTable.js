import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getReport, getReportById } from "@/api/report";
import { baseUrl } from "../constants";
const ReportTable = () => {
  const [reports, setReports] = useState([]);
  const [expanded, setExpanded] = useState(false);
  // const [expandedRows, setExpandedRows] = useState([]);
  const [openTooltip, setOpenToolTip] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getReport();
        if (response && response.data) {
          //  setReports(response.data);
          const sortedReports = response.data.sort(
            (a, b) => b.reportYear - a.reportYear
          );
          setReports(sortedReports);
          //  setExpandedRows(new Array(sortedReports.length).fill(false));
        } else {
          console.error(
            "Invalid response format. Expected an object with a data array."
          );
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    getData();
  }, []);

  const openPdfInNewTab = (report_id) => {
    fetch(`${baseUrl}/report/getReportPdf/${report_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error opening file");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        window.open(url, "_blank");

        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        //console.error("Error opening file:", error);
      });
  };
  // const toggleRow = (index) => {
  //   setExpandedRows((prevExpandedRows) => {
  //     const newExpandedRows = [...prevExpandedRows];
  //     newExpandedRows[index] = !newExpandedRows[index];
  //     return newExpandedRows;
  //   });
  // };
  const toggleTooltip = (e, index) => {
    e.stopPropagation();
    setOpenToolTip(!openTooltip);
    setTooltipIndex(index);
  };

  const closeTooltip = (e) => {
    e.stopPropagation();
    setOpenToolTip(false);
    setTooltipIndex(null);
  };

  return (
    <table style={{maxWidth:"1500px"}} className="container report-table mb-4">
      <thead>
        <tr>
          {/* <th>No</th> */}
          <th>Report Year</th>
          <th>Title</th>
          <th>Published By</th>

        
          <th>Description</th>
          <th style={{width:"200px"}}>Open</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report, index) => (
          <tr key={report.id}>
          <td>{report.reportYear}</td>
            {/* <td>{index + 1}</td> */}
            <td>{report.title}</td>
            <td>{report.publishedBy}</td>

       
           
            <td>
              {/* {expandedRows[index] ? ( */}
              {expanded ? (
                <p>{report.shortDesc}</p>
              ) : (
                <>
                  <p style={{textAlign:"left"}}>
                    {report.shortDesc.slice(0, 45)}...
                    <span>
                      {report.shortDesc.length > 45 && (
                        <div key={index}
                          className="tooltip-container"
                          //  onClick={() => toggleRow(index)}
                         // onClick={toggleTooltip}
                         onClick={(e) => toggleTooltip(e, index)} 
                        >
                          More
                          {openTooltip && tooltipIndex === index  && (
                            <span style={{width:"340px"}}
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
                              {openTooltip && tooltipIndex === index && (
                                <div className="tooltip-content mt-3">
                                  {report.shortDesc}
                                </div>
                              )}
                            </span>
                          )}
                        </div>
                      )}
                    </span>
                  </p>
                </>
              )}
            </td>
            <td>
            {/* <button  onClick={() => openPdfInNewTab(report.id)}> */}
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#007bff"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="css-i6dzq1"
                cursor="pointer"
                onClick={() => openPdfInNewTab(report.id)}
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {/* </button> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
