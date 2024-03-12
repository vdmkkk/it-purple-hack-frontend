import React, { useEffect, useState } from "react";

import "../styles/TableView.css";
import loop from "../assets/icons/search.svg"
import DataTable from "./DataTable";

// import bruh from "../data/matrix-mock.json"
import backBar from "../assets/icons/grayNavBar.svg"
import pinkBar from "../assets/icons/pinkNavBar.svg"
import { PopUp } from "./PopUp";
import axios from 'axios';

export const TableView = () => {

     const hack = '2023-12-31T';
     const rn = new Date().toJSON().split("T")[0];
     console.log(rn);

     const [tableData, setTableData] = useState([]);
     const [isPopUp, isPopUpShow] = useState(false);
     const [page, setPage] = useState(1);
     const [filename, setFilename] = useState('');

     
     const getMatrix = async (name) => {
          const headers = {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          };
          console.log(name, page);
          await axios.get(`http://91.222.236.221:8080/matrix/get_matrix?matrix_name=${name}&page=${page}`, { headers })
          .then(response => {
            if (response.status == 200){
               setTableData(response.data["data"]);
               console.log(response.data["data"])
            }
          })
          .catch(error => {
            console.error(`Error: ${error}`); // Log any errors that occur during the request
          });
     }


     const getFiles = async (filename) => {
          const headers = {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          };
          await axios.get(`http://91.222.236.221:8080/matrix/get_matrices_by_duration?time_from=${hack}23%3A59%3A59%2B00%3A00&time_to=${rn}T23%3A59%3A59%2B00%3A00`, { headers })
          .then(response => {
            if (response.status == 200){            
               setFilename(response.data.filter((item) => item["name"].includes(filename + "_")).sort((a, b) => {return new Date(b["timestamp"]) - new Date(a["timestamp"])})[0]["name"]);
               getMatrix(response.data.filter((item) => item["name"].includes(filename + "_")).sort((a, b) => {return new Date(b["timestamp"]) - new Date(a["timestamp"])})[0]["name"]);
            }
          })
          .catch(error => {
            console.error(`Error: ${error}`); // Log any errors that occur during the request
          });
      };

     useEffect(() => {
          getFiles("baseline");
          // setTableData(bruh);
     }, []);

     function handleSave() {
          isPopUpShow(true);
     }
     console.log(page);

  return (
    <div className='table-conteiner'>
          <div className="buttons-table">
               <div className="saving-button" onClick={handleSave}><p>Сохранить изменения</p></div>

               <div className="search-fields">
                    <div className="search-form">
                         <input className="search-input" placeholder="Поиск по категории"></input>
                         <img src={loop}></img>
                    </div>

                    <div className="search-form">
                         <input className="search-input" placeholder="Поиск по региону"></input>
                         <img src={loop}></img>
                    </div>
               </div>

          </div>

          <div className="column-names">
               <p>microcategory_id</p>
               <p>region_id</p>
               <p style={{"paddingLeft": "50px"}}>Цена</p>
          </div>

          <div className="table">
               {isPopUp==true ? <PopUp isPopUpShow={isPopUpShow}/> : <div></div> }
               <div className="data">
                    {isPopUp==true ? <div className="blured-data"></div> : <div></div> }
                    {tableData != null ? <DataTable data={tableData}/> : <div/>}
               </div>

          </div>
          <div className="pages">
               <div onClick={() => setPage(page - (page - 1) % 4)}><p>{page - (page - 1) % 4}</p></div>
               <div onClick={() => setPage(page - (page - 1) % 4 + 1)}><p>{page - (page - 1) % 4 + 1}</p></div>
               <div onClick={() => setPage(page - (page - 1) % 4 + 2)}><p>{page - (page - 1) % 4 + 2}</p></div>
               <div onClick={() => setPage(page - (page - 1) % 4 + 3)}><p>{page - (page - 1) % 4 + 3}</p></div>
          </div>
          
          
    </div>
  );
};
