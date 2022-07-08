import './App.css';
import ParticleBackground from './Components/Background/ParticleBackground.js';
import { CentreText } from './Components/Centre/CentreText';
import { ProfilePage } from './Pages/Profile/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {NavBar} from './Components/NavBar/NavBar'
import {AboutMe} from './Pages/AboutMe/AboutMe'
import {Projects} from './Pages/Projects/Projects'
import {ContactMe} from './Pages/ContactMe/ContactMe'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<> <ParticleBackground /> <NavBar/>  <CentreText/> </> }></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
          <Route exact path="/aboutme" element={<AboutMe />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contactme" element={<ContactMe />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}


export default App;
