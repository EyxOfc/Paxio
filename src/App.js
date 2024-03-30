import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home';
import Pexio from './Pages/Pexio';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pexio' element={<Pexio />}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
