import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Paxio from './Pages/Paxio';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/paxio' element={<Paxio />}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
