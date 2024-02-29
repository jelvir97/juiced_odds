import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import NHL_API from './NHL_API';
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import Standings from './Standings'
import { useState, useEffect } from 'react';

import Schedule from './Schedule';

function App() {

  return (
    <div>
        <NavigationBar/>

        <Routes>
          <Route exact path="/profile" element={<h1>Profile</h1>} />
          <Route exact path="/standings" element={<Standings />} />
          <Route exact path="/teams" element={<TeamsList />}/>
          <Route exact path="/schedule" element={<Schedule />}/>
          <Route path= "/:team/stats" element={<TeamPage/>}/>
          <Route path="/" element={<h1>Home</h1>}/>
        </Routes>
        
    </div>

  );
}

export default App;
