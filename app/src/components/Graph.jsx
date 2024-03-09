import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "../styles/Graph.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function countEntriesByDay(data) {
  const counts = {};

  data.forEach(item => {
    const date = new Date(item.time * 1000);
    const dateString = date.toISOString().split('T')[0];

    if (counts[dateString]) {
      counts[dateString]++;
    } else {
      counts[dateString] = 1;
    }
  });

  // Convert the counts object to an array of [date, count] pairs
  const entries = Object.entries(counts);

  // Sort the array by date
  entries.sort((a, b) => new Date(a[0]) - new Date(b[0]));

  // If you prefer the result as an object in chronological order
  const sortedCounts = entries.reduce((acc, [date, count]) => {
    acc[date] = count;
    return acc;
  }, {});

  return sortedCounts; // Or return entries if you prefer the array format
}

export const Graph = ({mockData, sourceData}) => {
  // console.log(mockData)
  return (
    <div className="Graph">
      <div className="dataCard revenueCard">
        <Line
          data={{
            // labels: revenueData.map((data) => data.label),
            labels: ["date", "interest"],
            datasets: [
              {
                label: "Revenue",
                data: countEntriesByDay(mockData),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              // {
              //   label: "Cost",
              //   data: revenueData.map((data) => data.cost),
              //   backgroundColor: "#FF3030",
              //   borderColor: "#FF3030",
              // },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.3,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>

      {/* <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
      </div> */}
    </div>
  );
};
