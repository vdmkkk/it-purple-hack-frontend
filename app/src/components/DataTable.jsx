import React from 'react';
import "../styles/DataTable.css"

import redCross from "../assets/icons/redCross.svg"
import grayPlus from "../assets/icons/grayPlus.svg"

function DataTable({ data }) {
  return (
    <div>
        {data.map((item) => (
          <div className='raw'>
              <p>{item["microcategory_id"]}</p>
              <p>{item["region_id"]}</p>

              <div className='input-div'><input defaultValue={item["price"]}></input></div>
              
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