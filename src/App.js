import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Paxio from './Pages/Paxio';

import { useState } from 'react';

import PaxioCode from 'paxiocode';

function App() {

  const [ UnitButton, setUnitButton ] = useState(4);

  const [ UnitValue, setUnitValue ] = useState(undefined);

  function handleClickUnitButton(Value){
    setUnitButton(Value);
  }

  function handleClickButtonGerador(){
    const response = JSON.parse(PaxioCode(UnitButton));
    setUnitValue(response.data)
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/paxio' element={<Paxio handleClickUnitButton={handleClickUnitButton} handleClickButtonGerador={handleClickButtonGerador} UnitValue={UnitValue}/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
