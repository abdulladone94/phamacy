import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
// import Login from './components/login/Login';
import NavBar from './components/Nav';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
      <Hero />
    </div>
  );
}

export default App;
