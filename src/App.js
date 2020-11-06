import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';
import ProjectCoordinator from './components/ProjectCoordinator';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Helmet>
          <title>Jonathan Liew | Design</title>
          <meta
            name="description"
            content="This is a space I put together to showcase my work as a designer and illustrator. I have a background in games design, and am passionate about the stories we tell through the experiences we create."
          />
        </Helmet>
        <Header />
        <ProjectCoordinator />
      </div>
    </BrowserRouter>
  );
}

export default App;