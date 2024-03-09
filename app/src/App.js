import logo from './logo.svg';
import './App.css';
import { Graph } from './components/Graph';


import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import mockData from './data/mock.json'

function App() {

  // console.log(mockData)

  return (
    <div className="App">
      <Graph mockData={mockData} sourceData={sourceData}></Graph>
    </div>
  );
}


export default App;
