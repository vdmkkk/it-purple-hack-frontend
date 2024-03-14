import React from "react";

import "../styles/PopUp.css";

import warning from '../assets/icons/warning.svg'

import { useState } from "react";

import axios from "axios";


export const PopUp = ({isPopUpShow, filename, updated, added, deleted, parent_name}) => {

    function handleYes() {
        isPopUpShow(false)
    }

    function handleCancel() {
        isPopUpShow(false)
    }

    const [file, setFile] = useState(filename);

    const setStorage = async () => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        var data = {
            "updated": updated,
            "added": added,
            "deleted": deleted,
            "parent_name": parent_name,
            "new_name": file,
            'is_baseline': file == 'baseline' 
        }
        await axios.post(`http://45.8.99.29:8080/matrix/create`, data, { headers })
            .then(response => {
                if (response.status == 200) {
                    handleYes();
                }
            })
            .catch(error => {
                console.error(`Error: ${error}`); // Log any errors that occur during the request
            });
    };

  return (
    <div className='pop-up'>

        <img src={warning} className="warning-icon"></img>

        <div className="label-text">
            <p>Уверены, что хотите</p>
            <p>сохранить изменения?</p>
        </div>

        <div>
            <p className="label-text">Название файла</p>
            <input className="input-pop-up" value={file} onChange={(e) => setFile(e.target.value)}/>
        </div>

        <div className="buttons">

            <div className="yes-button" onClick={handleYes}>
                <p>Да</p>
            </div>

            <div className="cancel-button" onClick={handleCancel}>
                <p>Отмена</p>
            </div>

        </div>
            

    </div>
  );
};
