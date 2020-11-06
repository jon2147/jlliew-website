import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';
import ProjectCoordinator from './components/ProjectCoordinator';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { siteDescription } from './data/projects.js';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Helmet>
          <title>Jonathan Liew | Design</title>
          <meta
            name="description"
            content={siteDescription}
          />
        </Helmet>
        <Header />
        <ProjectCoordinator />
      </div>
    </BrowserRouter>
  );
}

export default App;