import { Moment } from 'moment';
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Avia from './pages/Avia';
import Info from './pages/Info';

function App() {
  const [fromCity, setFromCity] = useState<string>('');
  const [toCity, setToCity] = useState<string>('');
  const [flightDate, setFlightDate] = useState<Moment | null>(null);
  const [backtDate, setBackDate] = useState<Moment | null>(null);

  return (
    <div className='app' >
      <Routes>
        <Route path='/avia' element={<Avia fromCity={fromCity} setFromCity={setFromCity}
          toCity={toCity} setToCity={setToCity}
          flightDate={flightDate} setFlightDate={setFlightDate}
          backtDate={backtDate} setBackDate={setBackDate}
        />} />
        <Route path='/avia/info' element={<Info fromCity={fromCity}
          toCity={toCity}
          flightDate={flightDate}
          backtDate={backtDate}
        />} />
        <Route path='*' element={<Navigate to='/avia' replace />} />
      </Routes>
    </div>
  );
}

export default App;
