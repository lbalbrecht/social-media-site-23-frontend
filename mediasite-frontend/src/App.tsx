import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import './css/App.css';
import { AuthProvider } from './context/Context'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar';
import SiteNav from "./components/SiteNav/SiteNav"
import Login from './components/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter basename='/name_pending'>
          <div className="appNav">
            <SiteNav passedFunc={()=>setShowLogin(!showLogin)}/>
          </div>
          <div className="appContent">
            <div className="appLogin">
              <Login showModal={showLogin}/>
            </div>
            <div className="appBody">
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/:username' element={<Profile username="" />} />
              </Routes>
            </div>
            <div className="appSidebar">
              <Sidebar />
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
