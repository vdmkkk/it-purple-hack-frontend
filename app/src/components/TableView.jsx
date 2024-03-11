import React, { useEffect, useState } from "react";

import "../styles/TableView.css";
import loop from "../assets/icons/search.svg"
import DataTable from "./DataTable";

import bruh from "../data/matrix-mock.json"
import backBar from "../assets/icons/grayNavBar.svg"
import pinkBar from "../assets/icons/pinkNavBar.svg"

export const TableView = () => {

     const [tableData, setTableData] = useState([]);
     useEffect(() => {
          setTableData(bruh);
     }, []);

  return (
    <div className='table-conteiner'>
          <div className="buttons-table">
               <div className="saving-button"><p>Сохранить изменения</p></div>

               <div className="search-fields">
                    <div className="search-form">
                         <input className="search-input" placeholder="Поиск по id1"></input>
                         <img src={loop}></img>
                    </div>

                    <div className="search-form">
                         <input className="search-input" placeholder="Поиск по id2"></input>
                         <img src={loop}></img>
                    </div>
               </div>

          </div>

          <div className="column-names">
               <p>id 1</p>
               <p>id 2</p>
               <p>Цена</p>
          </div>

          <div className="table">
               <div className="data">
                    <DataTable data={tableData}/>
               </div>
          </div>
          
    </div>
  );
};
