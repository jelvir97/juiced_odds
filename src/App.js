import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div>
        <NavigationBar/>

        <Routes>
          <Route exact path="/profile" element={<h1>Profile</h1>} />
          <Route exact path="/players" element={<h1>Players</h1>} />
          <Route exact path="/teams" element={<h1>Teams</h1>}/>
          <Route exact path="/schedule" element={<h1>Schedule</h1>}/>
          <Route path="/" element={<h1>Home</h1>}/>
        </Routes>
        <h1 className="fixed text-center text-3xl font-bold underline first-letter:text-blue-900">
          Hello world!
        </h1>
    </div>

  );
}

export default App;
