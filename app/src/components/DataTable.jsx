import React, { useEffect, useState } from 'react';
import "../styles/DataTable.css"

import redCross from "../assets/icons/redCross.svg"
import grayPlus from "../assets/icons/grayPlus.svg"
import { useSearchParams } from 'react-router-dom';

function DataTable({ data }) {
  // console.log('111', data);
  const [dataa, setData] = useState([]);
  // const [prices, setPrices] = useState(data.map((item) => {return item["price"]}));
  // console.log('hell', data.map((item) => {return item["price"]}))
  // useEffect(() => {
  //   setPrices(data.map((item) => {return item["price"]}));
  //   console.log("zaman loh");
  // }, [data]);

  useEffect(() => {setData(data)}, [data]);
  console.log("huy", dataa)

  function changePrice(key, value) {
    var newData = [...dataa];
    newData[key]['price'] = parseInt(value);
    setData(newData);
  }

  return (
    <div>
      {/* <h1>{data[0]["price"]}</h1> */}
        {dataa.map((item, key) => (
          <div className='raw'>
            <h1>{dataa[key]["price"]}</h1>
              <p>{item["microcategory_id"]}</p>
              <p>{item["region_id"]}</p>

              <div className='input-div'><input value={item["price"]} onChange={e => changePrice(key, e.target.value)} className='data-input'></input></div>
              
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