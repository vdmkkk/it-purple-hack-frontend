import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsDumbbell from "highcharts/modules/dumbbell";
import HC_more from "highcharts/highcharts-more";

import "../styles/Dumbbell.css"
import { createRoutesFromChildren } from "react-router-dom";

HC_more(Highcharts);
highchartsDumbbell(Highcharts);

var olddata = [
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


function getData (mockData, setChartOptions) {
  
    var newData = [{
      name: mockData[0]["changes"][0]["price"],
      low: mockData[0]["changes"][0]["time"],
      high:  mockData[0]["changes"][1]["time"]
    }]

    

    for (let i = 1; i < mockData[0]["changes"].length - 1; i++) {
    newData.push({
    name: mockData[0]["changes"][i]["price"],
    low: mockData[0]["changes"][i]["time"],
    high:  mockData[0]["changes"][i+1]["time"]
    });
    }
    console.log("newdata", newData)


    setChartOptions({
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
          data: newData
        }
      ]
    })
    return newData;

}


function LineChart({mockData, metadata, type}) {

  const [newdata, setData] = useState(mockData);

  console.log("lol", mockData)
  console.log("piska", metadata)
 
  useEffect(() => {
    if (mockData.length == 1) {
      
      setData(getData(mockData, setChartOptions))
      console.log("ass",  newdata)
    }
  }, [mockData])


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
        data: newdata
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
