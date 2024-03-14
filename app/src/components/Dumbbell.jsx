import React, { useState } from "react";
import { render } from "react-dom";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsDumbbell from "highcharts/modules/dumbbell";
import HC_more from "highcharts/highcharts-more";

import "../styles/Dumbbell.css"

HC_more(Highcharts);
highchartsDumbbell(Highcharts);

var data = [
  {
    name: "Slovenia",
    low: 69,
    high: 81
  },
  {
    name: "Sweden",
    low: 73,
    high: 82
  },
  {
    name: "Hungary",
    low: 68,
    high: 76
  },
  {
    name: "Italy",
    low: 69,
    high: 83
  },
  {
    name: "UK",
    low: 71,
    high: 81
  }
];


function LineChart({mockData, metadata, type}) {


  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "dumbbell",
      inverted: true
    },

    legend: {
      enabled: false
    },

    subtitle: {
      text: "1960 vs 2018"
    },

    title: {
      text: "Analys"
    },

    tooltip: {
      shared: true
    },

    xAxis: {
      type: "category"
    },

    yAxis: {
      title: {
        text: "Price changing (rubles)"
      }
    },

    series: [
      {
        name: "Life expectancy change",
        data: data
      }
    ]
  });

  return (
    <div className="dumb-bell" >
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default LineChart;;
