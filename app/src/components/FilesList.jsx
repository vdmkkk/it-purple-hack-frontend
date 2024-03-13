import React, {useState} from "react";

import "../styles/FilesList.css";
import pinkLine from "../assets/icons/pinkLine.svg"
import smallFile from "../assets/icons/smallFileDark.svg"

export const FilesList = ({option, setOption}) => {

     const list = [
          "baseline_1", 
          "discounts_1", 
          "discounts_2", 
          "discounts_3", 
          "discounts_4", 
          "discounts_5", 
          "discounts_6"
     ]



  return (
    <div className='files-list'>

     {list.map((file_name) => (

          file_name == "discounts_1" ?  

          <div className="all-files">
               <img src={pinkLine} className="pink-line" />
               <div onClick={() => setOption(file_name)} className={file_name==option ? "file-active" : "file"}>
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">{file_name}</p>
               </div>
          </div> 
     :    
          <div className="all-files">
               <div onClick={() => setOption(file_name)} className={file_name==option ? "file-active" : "file"}>
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">{file_name}</p>
               </div>
          </div>
     ))}

           

           

          {/* <div className="all-files">
               <div onClick={() => setOption("discounts_1")} className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_1</p>
               </div>

               <div onClick={() => setOption("discounts_2")}  className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_2</p>
               </div>

               <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_3</p>
               </div>

               <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_4</p>
               </div>

               <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_5</p>
               </div>

               <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_6</p>
               </div>


           </div> */}

    </div>
  );
};
