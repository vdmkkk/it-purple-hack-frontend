import React from "react";

import "../styles/PopUp.css";

import warning from '../assets/icons/warning.svg'


export const PopUp = ({isPopUpShow}) => {

    function handleYes() {
        isPopUpShow(false)
    }

    function handleCancel() {
        isPopUpShow(false)
    }

  return (
    <div className='pop-up'>

        <img src={warning} className="warning-icon"></img>

        <div className="label-text">
            <p>Уверены, что хотите</p>
            <p>сохранить изменения?</p>
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
