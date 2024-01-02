
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  const excludedFields = ["SR_NO", "YEAR","RESERVOIR_CREATED_IN_LITRE"];
  const generateChartData = (field) => {
    
    const fieldTitles = {
     
      NUMBER_OF_VILLAGES: "Villages Count",
      NO_OF_HOURS: "Invested Hours",
      CONTRIBUTION_BY_FARMERS: "Farm Con(Rs.)",
      CONTRIBUTION_FROM_SPONSER:"Spo Count(Rs.)",
      RESERVOIR_CREATED_IN_CRORE_LITRE: "Reservoir (Cr. Ltr)",
      
    };
    return {
      labels: chartData.map((entry) => entry.YEAR.toString()),
      datasets: [
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
      tooltip: {
        callbacks: {
          label: (context) => +context.parsed.y,
        },
      },
      y: false,
    },
  };

  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
    {chartData &&
      Object.keys(chartData[0])
        .filter((field) => !excludedFields.includes(field))
        .map((field,index) => (
          <div key={field} style={{ flex: "1",
                minWidth: "300px",
                margin: "10px",
                textAlign: "center",
                marginBottom: index < 3 ? "20px" : "0", }}>
          
            <Line data={generateChartData(field)} options={options} />
            <hr />
          </div>
        ))}
  </div>
);
};

export default LineChart;
