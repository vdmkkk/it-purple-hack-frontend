import React, {useState} from 'react';
import "../styles/ChooseTable.css"
import Dropdown from './reusable/Dropdown';

import selectarrow from "../assets/icons/selectarrow.svg"


function ChooseTable() {

  const [discount, setDiscount] = useState({"id": 0, "label": "baseline"}, {"id": 1, "label": "discounts_1"}, {"id": 2, "label": "discounts_2"}, {"id":3, "label": "discounts_3"});
  const [isOpen, setIsOpen] = useState(-1);
  const [discountLabels, setDiscountLabels] = useState([{"id": 0, "label": "baseline"}, {"id": 1, "label": "discounts_1"}, {"id": 2, "label": "discounts_2"}, {"id":3, "label": "discounts_3"}]);

  const [dateBefore, setDateBefore] = useState('11.09.2001')
  const [dateAfter, setDateAfter] = useState('11.09.2001')


  return (
    <div className='choose-table-cont'>
       <div className='head-line'>
        <p className='change-label'>Редактирование таблицы</p>
        <Dropdown id={1} label={"Выберите таблицу"} selectedOption={discount} setSelectedOption={setDiscount} isOpen={isOpen} setIsOpen={setIsOpen} labels={discountLabels} />
        <div className='change-button'><p>Изменить таблицу</p></div>
       </div>

       <div className='bottom-cont'>
            <div className='date-choose-form'>
                <div className='arrow-with-label'>
                    <p className='upper-label'><strong>Состояние на </strong>{dateBefore}</p>
                    <img src={selectarrow} />
                </div>
                <p className='bottom-label'>до редактирования</p>
            </div>

            <div className='date-choose-form'>
              <div className='arrow-with-label'>
                  <p className='upper-label'><strong>Состояние на </strong>{dateAfter}</p>
                  <img src={selectarrow} />
              </div>
                <p className='bottom-label'>после редактирования</p>
            </div>

       </div>
    </div>
  );
}

export default ChooseTable;