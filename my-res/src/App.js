import React from 'react';
import Nav from './Components/Nav.js'
import './App.css';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import Menu from './Components/Menu.js';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
