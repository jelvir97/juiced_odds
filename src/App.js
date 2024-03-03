import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import NHL_API from './NHL_API';
import TeamsList from './TeamsList';
import TeamPage from './TeamPage';
import Standings from './Standings'
import { useState, useEffect } from 'react';

import Dashboard from './Dashboard';
import UserContext from './UserContext';

function App() {
  const [user, setUser] = useState()

  useEffect(()=>{
    const getUser = async () => {
      try{
        const {data}= await axios.get("http://localhost:3001/login/success", {
          withCredentials: "include",
          headers: {
           Accept: "application/json",
            "Content-Type": "application/json",
           "Access-Control-Allow-Credentials": true,
         },
       });
       setUser(()=> ({user: data.user, "logOut": logOut}));
      }catch{
        return null;
      }
  }
  
    getUser()
    console.log(user)
    
  },[])

  const logOut = async (e)=>{
    e.preventDefault()
    try{
        const resp = await axios.post('http://localhost:3001/logout', {},{
        withCredentials: "include",
        headers: {
        Accept: "application/json",
          "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      }
      })
      console.log(resp)
      if(resp.status === 200) setUser(null)
    }catch(err){
      console.log(err)
    }
  }
  
  
  return (
    <div>
      <UserContext.Provider value={user} >
        <NavigationBar/>
        <div className='flex justify-center w-screen my-5 mx-7'> 
          <Routes>
            <Route exact path="/profile" element={<h1>Profile</h1>} />
            <Route exact path="/standings" element={<Standings />} />
            <Route exact path="/teams" element={<TeamsList />}/>
            <Route exact path="/dash" element={<Dashboard />}/>
            <Route path= "/:team/stats" element={<TeamPage/>}/>
            <Route path="/" element={<h1>Home</h1>}/>
          </Routes>
        </div>
      </UserContext.Provider>
    </div>

  );
}

export default App;
