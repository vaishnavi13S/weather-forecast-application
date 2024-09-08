import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Home from './components/Home';
import WeatherPage from './components/WeatherPage';
import './App.css';

function Layout() {
  return (
    <div>
      
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
}

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/weather/:city" element={<WeatherPage/>} />
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;