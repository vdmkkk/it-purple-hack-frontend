import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <h1>HOME</h1>
    </div>
  );
}

export default App;
