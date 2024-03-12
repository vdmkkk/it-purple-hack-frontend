import React from 'react';
import "../styles/DiffTable.css"

import redCross from "../assets/icons/redCross.svg"
import grayPlus from "../assets/icons/grayPlus.svg"

function DataTable({ data }) {
  return (
    <div>
        {data.map((item) => (
          <div className='raw'>
              <p>{item["mc_id"]}</p>
              <p>{item["lc_id"]}</p>

              <div className='diff-input-div'>
                <input defaultValue={item["price"]} className='passive-input'></input>
              </div>

              <div className='note-div'>
                <p className='note'>ред.</p>
              </div>
          
          </div>
          
        ))}


    </div>
  );
}

export default DataTable;