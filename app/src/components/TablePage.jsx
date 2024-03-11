import React from 'react';
import { useState } from 'react';
import '../styles/TablePage.css';

import { SidePanel } from './SidePanel';
import { PopUp } from './PopUp';

import wideLine from '../assets/icons/Line-wide.svg'

import { FilesList } from './FilesList';
import { TableView } from './TableView';

import loop from '../assets/icons/search.svg'
import person from '../assets/icons/person-fill.svg'

function TablePage() {
    const AccountName = 'vdmk'
    return(
        <div className='table-page'>
                <img src={wideLine} className='wide-line'></img>
                
                <SidePanel pageState="files_page"> </SidePanel>

                <div className='right-side'>

                    <div className='header'>
                        <h2>ГЛАВНАЯ</h2>
                        
                        <div className='top-bars'>
                            
                              <div className='form-2'>
                                    {/* value={value}  onChange={(e) => handleClickLogin(e.target.value)}*/}
                                    <input  className='search' placeholder="Поиск"/>
                                    <img src={loop}/>
                              </div>

                              <div className='form-2'>
                                    <div className='profile-button'><p>{AccountName}</p></div>
                                    <img src={person}/>
                              </div>
                              
                        </div>
                    </div>

                    <div className='components'>
                        <FilesList/>
                        <TableView/>
                    </div>
                    {/* <PopUp/> */}
                </div>

                <div className='title-of-winners'>
                    <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
                </div>

            
        </div>
    );
}

export default TablePage;