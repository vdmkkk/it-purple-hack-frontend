import React from 'react';
import { useState } from 'react';
import '../styles/TablePage.css';

import { SidePanel } from './SidePanel';
import { PopUp } from './PopUp';

import pinkWideLine1 from '../assets/icons/pinkWideLine1.svg'
import pinkWideLine2 from '../assets/icons/pinkWideLine2.svg'


import { FilesList } from './FilesList';
import { TableView } from './TableView';

import loop from '../assets/icons/search.svg'
import person from '../assets/icons/person-fill.svg'

function TablePage() {
    const [file, setFile] = useState("baseline_1");

    console.log("huy",file);


    const AccountName = 'vdmk'
    return(
        <div className='table-page'>
                <img src={pinkWideLine1} className='wide-line-1'></img>
                <img src={pinkWideLine2} className='wide-line-2'></img>
                
                <SidePanel pageState="files_page"> </SidePanel>

                <div className='right-side'>

                    <div className='header'>
                        <h2>ФАЙЛЫ</h2>
                        
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
                        <FilesList setOption={setFile} option={file}/>
                        <TableView file={file}/>
                    </div>
                </div>

                <div className='title-of-winners'>
                    <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
                </div>

            
        </div>
    );
}

export default TablePage;