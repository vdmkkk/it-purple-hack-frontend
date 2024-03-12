import React, { useEffect, useState } from "react";

import "../styles/TableView.css";
import loop from "../assets/icons/search.svg"
import DataTable from "./DataTable";

// import bruh from "../data/matrix-mock.json"
import backBar from "../assets/icons/grayNavBar.svg"
import pinkBar from "../assets/icons/pinkNavBar.svg"

import leftDoubleArrow from "../assets/icons/leftDoubleArrow.svg"
import leftArrow from "../assets/icons/leftArrow.svg"
import rightArrow from "../assets/icons/rightArrow.svg"
import rightDoubleArrow from "../assets/icons/rightDoubleArrow.svg"

import { PopUp } from "./PopUp";
import axios from 'axios';

export const TableView = ({file}) => {

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
                    if (response.status == 200) {
                         setTableData(response.data["data"]);
                         console.log(response.data["data"])
                    }
               })
               .catch(error => {
                    console.error(`Error: ${error}`); // Log any errors that occur during the request
               });
     }


     const getFiles = async () => {
          const headers = {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          };
          await axios.get(`http://91.222.236.221:8080/matrix/get_matrices_by_duration?time_from=${hack}23%3A59%3A59%2B00%3A00&time_to=${rn}T23%3A59%3A59%2B00%3A00`, { headers })
               .then(response => {
                    if (response.status == 200) {
                         console.log()
                         setFilename(response.data.filter((item) => item["name"].includes(file + "_")).sort((a, b) => { return new Date(b["timestamp"]) - new Date(a["timestamp"]) })[0]["name"]);
                         getMatrix(response.data.filter((item) => item["name"].includes(file + "_")).sort((a, b) => { return new Date(b["timestamp"]) - new Date(a["timestamp"]) })[0]["name"]);
                    }
               })
               .catch(error => {
                    console.error(`Error: ${error}`); // Log any errors that occur during the request
               });
     };

     useEffect(() => {
          getFiles();
          // setTableData(bruh);
     }, []);

     const [maxPage, setMaxPage] = useState(-1);

     function handleSave() {
          isPopUpShow(true);
     }
     
     function nextPage() {
          setPage(page - (page - 1) % 4 + 4);
     }

     function prevPage() {
          if (page > 4) setPage(page - (page - 1) % 4 - 1);
     }

     function minPage() {
          if (page > 4) setPage(1);
     }

     function maxPageFunc() {
          if (maxPage != -1) {
               var data = []
               // while (data != null) {
               // }
          } else if (page < maxPage - 4) setPage(maxPage);
     }

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
                    <p style={{ "paddingLeft": "50px" }}>Цена</p>
               </div>


          <div className="column-names-files">
               <p>id 1</p>
               <p>id 2</p>
               <p>Цена</p>
          </div>



               {/* </div> */}
               <div className='slider-after'>
                    <img onClick={() => minPage()} className='number-cont' src={leftDoubleArrow}></img>
                    <img onClick={() => prevPage()} className='number-cont' src={leftArrow}></img>
                    <div onClick={() => setPage(page - (page - 1) % 4)} className={page == page - (page - 1) % 4 ? 'number-cont-active' : 'number-cont'}><p>{page - (page - 1) % 4}</p></div>
                    <div onClick={() => setPage(page - (page - 1) % 4 + 1)} className={page == page - (page - 1) % 4 + 1 ? 'number-cont-active' : 'number-cont'}><p>{page - (page - 1) % 4 + 1}</p></div>
                    <div onClick={() => setPage(page - (page - 1) % 4 + 2)} className={page == page - (page - 1) % 4 + 2 ? 'number-cont-active' : 'number-cont'}><p>{page - (page - 1) % 4 + 2}</p></div>
                    <div onClick={() => setPage(page - (page - 1) % 4 + 3)} className={page == page - (page - 1) % 4 + 3 ? 'number-cont-active' : 'number-cont'}><p>{page - (page - 1) % 4 + 3}</p></div>
                    <img onClick={() => nextPage()} className='number-cont' src={rightArrow}></img>
                    <img onClick={() => maxPageFunc()}className='number-cont' src={rightDoubleArrow}></img>
               </div>
               {/* <div className="pages">
                    <div className={page == page - (page - 1) % 4 ? "page-btn" : "page-btn-active"} onClick={() => setPage(page - (page - 1) % 4)}><p>{page - (page - 1) % 4}</p></div>
                    <div className={page == page - (page - 1) % 4 + 1 ? "page-btn" : "page-btn-active"} onClick={() => setPage(page - (page - 1) % 4 + 1)}><p>{page - (page - 1) % 4 + 1}</p></div>
                    <div className={page == page - (page - 1) % 4 + 2 ? "page-btn" : "page-btn-active"} onClick={() => setPage(page - (page - 1) % 4 + 2)}><p>{page - (page - 1) % 4 + 2}</p></div>
                    <div className={page == page - (page - 1) % 4 + 3 ? "page-btn" : "page-btn-active"} onClick={() => setPage(page - (page - 1) % 4 + 3)}><p>{page - (page - 1) % 4 + 3}</p></div>
               </div> */}


          </div>
     );
};
