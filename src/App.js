import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import NHL_API from './NHL_API';
import { useState, useEffect } from 'react';

import Schedule from './Schedule';

function App() {

  return (
    <div>
        <NavigationBar/>

        <Routes>
          <Route exact path="/profile" element={<h1>Profile</h1>} />
          <Route exact path="/players" element={<h1>Players</h1>} />
          <Route exact path="/teams" element={<h1>Teams</h1>}/>
          <Route exact path="/schedule" element={<Schedule />}/>
          <Route path="/" element={<h1>Home</h1>}/>
        </Routes>
        
    </div>

  );
}

export default App;
