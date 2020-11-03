import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';
import ProjectCoordinator from './components/ProjectCoordinator';
import { HashRouter, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <ProjectCoordinator />
      </div>
    </BrowserRouter>
  );
}

export default App;