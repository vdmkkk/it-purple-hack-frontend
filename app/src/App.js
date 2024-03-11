import './App.css';
import loop from './assets/icons/search.svg'
import person from './assets/icons/person-fill.svg'

import wideLine from './assets/icons/Line-wide.svg'


import { SidePanel } from './components/SidePanel';
import { MainGrid } from './components/MainGrid';
import { PopUp } from './components/PopUp';
import { FilesList } from './components/FilesList';
import { TableView } from './components/TableView';


import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

function App() {

  
  const AccountName = 'vdmk'

  

  return (
    <div className="App">

      <img src={wideLine} className='wide-line'></img>
       
        <SidePanel pageState="main_page"> </SidePanel>

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

            <MainGrid/>
            
        </div>

        <div className='title-of-winners'>
           <strong> Avito </strong>  x <strong> MISIS </strong> x <strong> MIREA </strong>
        </div>

    </div>
  );
}


export default App;
