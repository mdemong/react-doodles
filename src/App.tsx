import React from 'react';
import logo from './logo.svg';
import './App.css';

const sayHeyDawg = () => {console.log("Hey Dawg")}

const sayHey = (name : string) => {console.log(`Hey ${name}`)}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          style={{marginBottom:'2em'}}
          onClick={() => (() => {sayHeyDawg()})()}
          >
          Say Hi
        </button>
        <button
          style={{marginBottom:'2em'}}
          onClick={() => {sayHey('Jeff')}}
          >
          Say Hi to Jeff
        </button>
      </header>
    </div>
  );
}

export default App;
