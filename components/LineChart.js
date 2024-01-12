
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  const excludedFields = ["SR_NO", "YEAR","RESERVOIR_CREATED_IN_LITRE"];
  const generateChartData = (field) => {
    
    // user-friendly titles
    const fieldTitles = {
     
      NUMBER_OF_VILLAGES: "Villages Count",
      NO_OF_HOURS: "Invested Hours",
      CONTRIBUTION_BY_FARMERS: "Farmer Contribution(Rs.)",
      CONTRIBUTION_FROM_SPONSER:"Sponser Contribution(Rs.)",
      RESERVOIR_CREATED_IN_CRORE_LITRE: "Reservoir (Cr. Ltr)",
      
    };

  //generate an object with labels and datasets
    return {
      labels: chartData.map((entry) => entry.YEAR.toString()), // array of labels for the X-axis
      datasets: [                                               //array of object representing the data to be displayed
        {
          label: fieldTitles[field] || field,
          borderColor: "orange",
          borderWidth: 1, 
          data: chartData.map((entry) => entry[field]),
          fill: false,
      
         
        },
      ],
    };
  };

  const options = {
    devicePixelRatio:3,
    scales: {
      x: [
        {
          type: "linear",
          position: "bottom",
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      legend: {
        onClick: null, 
        labels: {
          font: {
            weight: 'bold' 
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => +context.parsed.y,
        },
      },
    },
  };


  return (
    
    <div className="Linechart_container">
    {chartData &&
      Object.keys(chartData[0])
        .filter((field) => !excludedFields.includes(field))
        .map((field,index) => (
          <div key={field} style={{ flex: "1",
                minWidth: "300px",
                margin: "10px",
                textAlign: "center",
                marginBottom: index < 3 ? "20px" : "0", 
                // border: "1px solid #ddd", 
                // borderRadius: "5px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)", 
                // padding: "10px",
                }}>
          
            <Line data={generateChartData(field)} options={options} />
            <hr />
          </div>
        ))}
        </div>
 
);
};

export default LineChart;
