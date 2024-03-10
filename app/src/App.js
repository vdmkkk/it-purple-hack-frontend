import logo from './logo.svg';
import './App.css';
import { Graph } from './components/Graph';
import { useState } from 'react';

import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import mockData from './data/mock.json'
import Dropdown from './components/reusable/Dropdown';

function App() {

  const [discount, setDiscount] = useState({"id": -1, "label": "Льгота"});
  const [region, setRegion] = useState({"id": -1, "label": "Регион"});
  const [microcategory, setMicrocategory] = useState({"id": -1, "label": "Товар"});
  const [isOpen, setIsOpen] = useState(-1)



  return (
    <div className="App">
      <div className='filters'>
        <Dropdown id={1} label={"Льгота"} selectedOption={discount} setSelectedOption={setDiscount} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Dropdown id={2} label={"Регион"} selectedOption={region} setSelectedOption={setRegion} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Dropdown id={3} label={"Товар"} selectedOption={microcategory} setSelectedOption={setMicrocategory} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      
      <Graph mockData={mockData} sourceData={sourceData}></Graph>
    </div>
  );
}


export default App;
