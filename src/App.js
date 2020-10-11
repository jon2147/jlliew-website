import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';
import ProjectTiles from './components/ProjectTiles';
import ProjectOverlayContent from './components/ProjectOverlayContent';
import Didactic from './components/Didactic';
import DidacticPanel from './components/DidacticPanel';




 

function App() {


  return (


    <div >
      <Header />


      <ProjectOverlayContent/>


      <main id="projects">
        <ProjectTiles />
      </main>

    </div>

  );
}

export default App;