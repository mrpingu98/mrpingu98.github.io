import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Component from './component';
import Homepage from './homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. TEEESSTTTTduhduh
        </p>
        <img src='https://lh3.googleusercontent.com/pw/AMWts8A5tGHXWzRDNcqlhiSjRfr3Kb9Lt4npBbsBc-LTPJvTjTwyyV264HVO_uVqR-kvhOvs3A5vBA4a3KnltER23MTBvphvZxZ3fOoZKQ5gygUOFwwemaHamQLzcQR3TDZovagXNJd5PJEm0ykZWXX6ceyntg=w592-h789-s-no?authuser=0' referrerpolicy="no-referrer" />
       <img src='https://images.sk-static.com/images/media/profile_images/artists/347077/huge_avatar' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Homepage />
    </div>
  );
}

export default App;
