import React, { useEffect, useState } from 'react';
import "../styles/DataTable.css"

import redCross from "../assets/icons/redCross.svg"
import grayPlus from "../assets/icons/grayPlus.svg"
import { useSearchParams } from 'react-router-dom';

function DataTable({ data }) {
  console.log('111', data);
  const [prices, setPrices] = useState(data.map((item) => {return item["price"]}));
  // console.log('hell', data.map((item) => {return item["price"]}))
  useEffect(() => {setPrices(data.map((item) => {return item["price"]}))}, [data])
  return (
    <div>
        {data.map((item, key) => (
          <div className='raw'>
            {/* <h1>{}</h1> */}
              <p>{item["microcategory_id"]}</p>
              <p>{item["region_id"]}</p>

              <div className='input-div'><input value={prices[key]} className='data-input'></input></div>
              
              <div className='empty-div'></div>
              <div className='icons-div'>
                <img src={grayPlus} className='crosses-img'></img>
                <img src={redCross} className='crosses-img'></img>
              </div>
          </div>
        ))}
    </div>
  );
}

export default DataTable;