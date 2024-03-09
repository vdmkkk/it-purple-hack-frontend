import logo from './logo.svg';
import './App.css';
import { Graph } from './components/Graph';


import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";

function App() {
  return (
    <div className="App">
      <Graph revenueData={revenueData} sourceData={sourceData}></Graph>
    </div>
  );
}


export default App;
