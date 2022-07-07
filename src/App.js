import './App.css';
import ParticleBackground from './Components/Background/ParticleBackground.js';
import { CentreText } from './Components/Centre/CentreText';
import { ProfilePage } from './Pages/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {NavBar} from './Components/NavBar/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<> <ParticleBackground /> <NavBar/>  <CentreText/> </> }></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}


export default App;
