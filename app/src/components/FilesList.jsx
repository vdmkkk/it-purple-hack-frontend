import React from "react";

import "../styles/FilesList.css";
import pinkLine from "../assets/icons/pinkLine.svg"
import smallFile from "../assets/icons/smallFile.svg"

export const FilesList = () => {

  return (
    <div className='files-list'>

           <div className="all-files">
                <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">baseline</p>
                </div>
           </div>

           <img src={pinkLine} className="pink-line" />

           <div className="all-files">
               <div className="file">
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">discounts_1</p>
               </div>

               <div className="file">
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


           </div>

    </div>
  );
};
