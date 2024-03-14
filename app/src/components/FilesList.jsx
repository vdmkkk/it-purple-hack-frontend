import React, {useState} from "react";

import "../styles/FilesList.css";
import pinkLine from "../assets/icons/pinkLine.svg"
import smallFile from "../assets/icons/smallFileDark.svg"
import plus from "../assets/icons/grayPlus.svg"

export const FilesList = ({option, setOption}) => {

     const [newFileName, setNewFileName] = useState("")

     let [list, setList] = useState([
          "baseline_1",
          "discounts_1",
          "discounts_2",
          "discounts_3",
          "discounts_4",
          "discounts_5",
          "discounts_6",
     ])


     // let [list, setList] = useState([
     //      {id: 1, name: "baseline_1", url:""},
     //      {id: 2, name: "discounts_1", url:""},
     //      {id: 3, name: "discounts_2", url:""},
     //      {id: 4, name: "discounts_3", url:""},
     //      {id: 5, name: "discounts_4", url:""},
     //      {id: 6, name: "discounts_5", url:""}, 
     //      {id: 7, name: "discounts_6", url:""}
     // ])

     function handleAddFile(fileName) {
          let newArr = list
          newArr.push(fileName)
          setList(newArr)
          console.log(list)
     }

  return (
    <div className='files-list'>

     {list.map(file => (

          file == "discounts_1" ?  

          <div className="all-files">
               <img src={pinkLine} className="pink-line" />
               <div onClick={() => setOption(file)} className={file==option ? "file-active" : "file"}>
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">{file}</p>
               </div>
          </div> 
     :    
          <div className="all-files">
               <div onClick={() => setOption(file)} className={file==option ? "file-active" : "file"}>
                    <img src={smallFile} className="small-file-icon" />
                    <p className="file-name">{file}</p>
               </div>
          </div>
     ))}

          <div className="all-files">
          <img src={pinkLine} className="pink-line" />
               <div className="file">
                    <img onClick={() => handleAddFile(newFileName)} src={plus} className="add-file-icon" />
                    {/* <input className="add-input" placeholder="Введите имя файла" onChange={(e) => setNewFileName(e.target.value)}></input> */}
                    {/* <img src={plus} style={{transform: "translate(-10px)"}} /> */}
               </div>
          </div> 

           

           

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
