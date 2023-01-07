import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar';
import SiteNav from "./components/SiteNav"

function App() {
  
  return (
    <div className="App">
      <BrowserRouter basename='/name_pending'>
        <div className="appNav">
          <SiteNav />
        </div>
        <div className="appContent">
          <div className="appBody">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/profile/:username' element={<Profile username=""/>} />
            </Routes>
          </div>
          <div className="appSidebar">
            <Sidebar />
          </div>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
