import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import User from './User_API';
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import Standings from './Standings'
import ProtectedRoutes from './ProtectedRoutes';
import { useState, useEffect } from 'react';

import Dashboard from './Dashboard';
import UserContext from './UserContext';
import HomePage from './HomePage';

/**
 * 
 * Main App component. Everything comes from this.
 * 
 * On load, it attempts to get user info from server. Fails if unauthenticated.
 * 
 * Unauth load is just homepage. Auth load allows user to see all content.
 */
function App() {
  const [user, setUser] = useState({})

  useEffect(()=>{
    const getUser = async () => {
      const u = await User.login()
      if(u) setUser(()=> ({user: u.user, "logout": User.logout, 'setUser': setUser}));    
  }
    getUser() 
    
  },[])

  return (
    <div className='w-full'>
      <UserContext.Provider value={user} >
        <NavigationBar/>
        <div className='flex justify-center w-screen '> 
          <Routes>
            <Route element={<ProtectedRoutes />} >
              <Route exact path="/profile" element={<h1>Profile</h1>} />
              <Route exact path="/standings" element={<Standings />} />
              <Route exact path="/teams" element={<TeamsList />}/>
              <Route exact path="/dash" element={<Dashboard />}/>
              <Route path= "/:team/stats" element={<TeamPage/>}/>
            </Route>

            <Route path="/" element={<HomePage />}/>
          </Routes>
        </div>
      </UserContext.Provider>
    </div>

  );
}

export default App;
