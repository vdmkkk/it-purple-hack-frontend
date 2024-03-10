import './App.css';
import { Graph } from './components/Graph';
import loop from './assets/icons/search.svg'
import person from './assets/icons/person-fill.svg'
import logo from './assets/icons/logoAvito.svg'
import house from './assets/icons/house-door-fill.svg'
import file from './assets/icons/file-fill.svg'
import barIcon from './assets/icons/bar-chart-fill.svg'
import gridIcon from './assets/icons/grid.svg'
import server from './assets/icons/hdd-fill.svg'
import logoutIcon from './assets/icons/logout.svg'
import wideLine from './assets/icons/Line-wide.svg'
import pinkLine from './assets/icons/pinkLine.svg'
import bigFile from './assets/icons/bigFile.svg'
import purple from './assets/icons/purple.svg'
import greenLine from './assets/icons/greenLine.svg'
import bigBar from './assets/icons/bigBar.svg'
import green from './assets/icons/green.svg'
import redLine from './assets/icons/redLine.svg'
import bigChange from './assets/icons/bigChange.svg'
import red from './assets/icons/red.svg'
import blueLine from './assets/icons/blueLine.svg'
import bigServer from './assets/icons/bigServer.svg'
import blue from './assets/icons/blue.svg'

function App() {

  const AccountName = 'vdmk'

  return (
    <div className="App">
      <img src={wideLine} className='wide-line'></img>
       

        <div className='sidePannel'>
            <div>
                <img src={logo} className='logo'/>
                <h1>Avito</h1>
                <h2>Admin Panel</h2>
            </div>
            <div className='sideTopics'>
              <div className='topic'>
                  <img src={house}/>
                  <h3> Главная </h3>
              </div>

              <div className='topic'>
                  <img src={file}/>
                  <h3> Файлы </h3>
              </div>

              <div className='topic'>
                  <img src={barIcon}/>
                  <h3> Маркетинг </h3>
              </div>

              <div className='topic'>
                  <img src={gridIcon}/>
                  <h3> Изменения </h3>
              </div>

              <div className='topic'>
                  <img src={server}/>
                  <h3> Сервер </h3>
              </div>

            </div>

            <div className='logout-button'>
                  <img src={logoutIcon}/>
                  <h3> Выйти </h3>
            </div>
        </div>


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


        <div className='main-grid'>

            <div className='grid-conteiner'>
              <div className='text-conteiner'>
                  <h2>ФАЙЛЫ</h2>
                  <img src={pinkLine}/>
                  <h3>редактирование таблиц с данными о ценах в рамках категорий</h3>
              </div>
              <img  className="grid-icon" src={bigFile}/>
              <img className='color-icon' src={purple}/>
            </div>

            <div className='grid-conteiner'>
              <div className='text-conteiner'>
                  <h2>МАРКЕТИНГ</h2>
                  <img src={greenLine}/>
                  <h3>графики анализа данных по локациям и категориям</h3>
              </div>
              <img  className="grid-icon" src={bigBar}/>
              <img className='color-icon' src={green}/>
            </div>

            <div className='grid-conteiner'>
              <div className='text-conteiner'>
                  <h2>ИЗМЕНЕНИЯ</h2>
                  <img src={redLine}/>
                  <h3>история правок в таблицах с ценами по датам</h3>
              </div>
              <img  className="grid-icon" src={bigChange}/>
              <img className='color-icon' src={red}/>
            </div>

            <div className='grid-conteiner'>
              <div className='text-conteiner'>
                  <h2>СЕРВЕР</h2>
                  <img src={blueLine}/>
                  <h3>скорость передачи данных, анализ производительности </h3>
              </div>
              <img  className="grid-icon" src={bigServer}/>
              <img className='color-icon' src={blue}/>
            </div>
            

        </div>
        </div>

        <div className='title-of-winners'>
        <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
        </div>
    </div>
  );
}


export default App;
