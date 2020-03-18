import React from 'react';
import logo from './logo.svg';
import './assets/css/fonts.css';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <body>
      <Header />


      <main>
      
        <div className="story">
          <div className="story-image" >
          </div>
          <div className="story-content" >
            <p className="story-heading">Anburion</p>
            <p className="story-body">A ef i imin haieder her anlaesher.</p>
          </div>
        </div>

      </main>


    </body>

  );
}

export default App;


/*
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
*/
