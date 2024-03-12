import React, {useState} from 'react';
import "../styles/DiffCont.css"

import bruh from "../data/matrix-mock.json"
import DiffTable from './DiffTable';

import redArrow from "../assets/icons/redArrow.svg"
import leftDoubleArrow from "../assets/icons/leftDoubleArrow.svg"
import leftArrow from "../assets/icons/leftArrow.svg"
import rightArrow from "../assets/icons/rightArrow.svg"
import rightDoubleArrow from "../assets/icons/rightDoubleArrow.svg"

function DiffCont() {

  const [isChangesOnly, setIsChangesOnly] = useState(false)
  const [isSort1, setIsSort1] = useState(false)
  const [isSort2, setIsSort2] = useState(false)

  return (
    <div className='diff-cont'>
       <div className='tables'>
          <div className='table-before'>
                <div className='column-names'>
                  <p>id 1</p>
                  <p>id 2</p>
                  <p>id price</p>
                </div>

                <div className='data-diff'>
                    <DiffTable data={bruh}></DiffTable>
                </div>

                <div className='slider-before'>
                      <div className='number-cont'><img src={leftDoubleArrow}></img></div>
                      <div className='number-cont'><img src={leftArrow}></img></div>
                      <div className='number-cont-active'><p>1</p></div>
                      <div className='number-cont'><p>2</p></div>
                      <div className='number-cont'><p>3</p></div>
                      <div className='number-cont'><p>4</p></div>
                      <div className='number-cont'><img src={rightArrow}></img></div>
                      <div className='number-cont'><img src={rightDoubleArrow}></img></div>
                </div>
            

          </div>

          <img src={redArrow}></img>

          <div className='table-after'>
                <div className='column-names'>
                  <p>id 1</p>
                  <p>id 2</p>
                  <p>id price</p>
                </div>

                <div className='data-diff'>
                    <DiffTable data={bruh}></DiffTable>
                </div>
                <div className='slider-after'>
                      <div className='number-cont'><img src={leftDoubleArrow}></img></div>
                      <div className='number-cont'><img src={leftArrow}></img></div>
                      <div className='number-cont-active'><p>1</p></div>
                      <div className='number-cont'><p>2</p></div>
                      <div className='number-cont'><p>3</p></div>
                      <div className='number-cont'><p>4</p></div>
                      <div className='number-cont'><img src={rightArrow}></img></div>
                      <div className='number-cont'><img src={rightDoubleArrow}></img></div>
                </div>
                
          </div>
      </div>

      <div className='bottom-options'>
         <div className='changes-only-cont'>
            <input type="checkbox" className={isChangesOnly ? 'changes-checkbox-active' : 'changes-checkbox'} onClick={() => setIsChangesOnly(!isChangesOnly)}></input>
            <p>Только изменения</p>
         </div>
         <p>Сортировать по</p>

         <div className='choose-id-sort'>
            <div className='id-form'>
              <input type="checkbox" className={isSort1 ? 'checkbox-sort-active' : 'checkbox-sort'} onClick={() => setIsSort1(!isSort1)}></input>
              <p>id1</p>
            </div>

            <div className='id-form'>
              <input type="checkbox" className={isSort2 ? 'checkbox-sort-active' : 'checkbox-sort'}  onClick={() => setIsSort2(!isSort2)}></input>
              <p>id2</p>
            </div>

         </div>
      </div>
       
    </div>
  );
}

export default DiffCont;