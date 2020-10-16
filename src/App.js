import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';
import ProjectCoordinator from './components/ProjectCoordinator';

function App() {
  return (
    <div >
      <Header />
      <ProjectCoordinator />
    </div>
  );
}

export default App;