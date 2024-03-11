import React from 'react';
import { useState } from 'react';
import '../styles/ShowDiffPage.css';

import { SidePanel } from './SidePanel';
import { PopUp } from './PopUp';

import redWideLine1 from '../assets/icons/redWideLine1.svg'
import redWideLine2 from '../assets/icons/redWideLine2.svg'


import { FilesList } from './FilesList';
import { TableView } from './TableView';

import loop from '../assets/icons/search.svg'
import person from '../assets/icons/person-fill.svg'

function ShowDiffPage() {
    const AccountName = 'vdmk'
    return(
        <div className='show-diff-page'>
                <img src={redWideLine1} className='wide-line-1'></img>
                <img src={redWideLine2} className='wide-line-2'></img>
                
                <SidePanel pageState="showdiff_page"> </SidePanel>

                <div className='right-side'>

                    <div className='header'>
                        <h2>ИЗМЕНЕНИЯ</h2>
                        
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
                        
                    </div>
                    {/* <PopUp/> */}
                </div>

                <div className='title-of-winners'>
                    <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
                </div>

            
        </div>
    );
}

export default ShowDiffPage;