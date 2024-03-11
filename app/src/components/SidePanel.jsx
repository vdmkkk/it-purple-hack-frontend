import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import "../styles/SidePanel.css";

import logo from '../assets/icons/logoAvito.svg'
import house from '../assets/icons/house-door-fill.svg'
import file from '../assets/icons/file-fill.svg'
import barIcon from '../assets/icons/bar-chart-fill.svg'
import gridIcon from '../assets/icons/grid.svg'
import server from '../assets/icons/hdd-fill.svg'

import houseDark from '../assets/icons/house-door-fill-dark.svg'
import fileDark from '../assets/icons/file-fill-dark.svg'
import barIconDark from '../assets/icons/bar-chart-fill-dark.svg'
import gridIconDark from '../assets/icons/grid-dark.svg'
import serverDark from '../assets/icons/hdd-fill-dark.svg'

import logoutIcon from '../assets/icons/logout.svg'

export const SidePanel = ({pageState}) => {

  const [choosenPage, setChoosen] = useState(pageState);
  console.log(pageState)

  let navigate = useNavigate();
  function handleLogout() {
    navigate('/login');
}
  function handleTablePage() {
    navigate('/tables');
  }

  function handleMarketingPage() {
    navigate('/marketing');
  }

  function handleShowDiffPage() {
    navigate('/showdiff');
  }

  function handleServerPage() {
    navigate('/server');
  }

  function handleMainPage() {
    navigate('/');
  }

  return (
    <div className='sidePannel'>
            <div>
                <img src={logo} className='logo'/>
                <h1>Avito</h1>
                <h2>Admin Panel</h2>
            </div>
            <div className='sideTopics'>
              <div className={pageState=="main_page" ? 'choosen-topic' : 'topic'} onClick={handleMainPage}>
                  <img src={pageState=='main_page' ? houseDark : house}/>
                  <h3> Главная </h3>
              </div>

              <div className={pageState=='files_page' ? "choosen-topic" : "topic"} onClick={handleTablePage}>
                  <img src={pageState=='files_page' ? fileDark : file}/>
                  <h3> Файлы </h3>
              </div>

              <div className={pageState=="marketing_page" ? 'choosen-topic' : 'topic'} onClick={handleMarketingPage}>
                  <img src={pageState=='marketing_page' ? barIconDark : barIcon}/>
                  <h3> Маркетинг </h3>
              </div>

              <div className={pageState=="showdiff_page" ? 'choosen-topic' : 'topic'} onClick={handleShowDiffPage}>
                  <img src={pageState=='showdiff_page' ? gridIconDark : gridIcon}/>
                  <h3> Изменения </h3>
              </div>

              <div className={pageState=="server-page" ? 'choosen-topic' : 'topic'} onClick={handleServerPage}>
                  <img src={pageState=='server-page' ? serverDark : server}/>
                  <h3> Сервер </h3>
              </div>

            </div>

            <div className='logout-button' onClick={handleLogout}>
                  <img src={logoutIcon}/>
                  <h3> Выйти </h3>
            </div>
        </div>
  );
};
