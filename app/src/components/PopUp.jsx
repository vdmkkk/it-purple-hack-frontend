import React from "react";

import "../styles/PopUp.css";

import warning from '../assets/icons/warning.svg'


export const PopUp = () => {


  return (
    <div className='pop-up'>

        <img src={warning} className="warning-icon"></img>

        <div className="label-text">
            <p>Уверены, что хотите</p>
            <p>сохранить изменения?</p>
        </div>

        <div className="buttons">

            <div className="yes-button">
                <p>Да</p>
            </div>

            <div className="cancel-button">
                <p>Отмена</p>
            </div>

        </div>
            

    </div>
  );
};
