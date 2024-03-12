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
                      <img src={leftDoubleArrow}></img>
                      <img src={leftArrow}></img>
                      <div className='number-cont-active'><p>1</p></div>
                      <div className='number-cont'><p>2</p></div>
                      <div className='number-cont'><p>3</p></div>
                      <div className='number-cont'><p>4</p></div>
                      <img src={rightArrow}></img>
                      <img src={rightDoubleArrow}></img>
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
                      <img src={leftDoubleArrow}></img>
                      <img src={leftArrow}></img>
                      <div className='number-cont-active'><p>1</p></div>
                      <div className='number-cont'><p>2</p></div>
                      <div className='number-cont'><p>3</p></div>
                      <div className='number-cont'><p>4</p></div>
                      <img src={rightArrow}></img>
                      <img src={rightDoubleArrow}></img>
                </div>
                
          </div>
      </div>

      <div className='bittom-options'>
         
      </div>
       
    </div>
  );
}

export default DiffCont;