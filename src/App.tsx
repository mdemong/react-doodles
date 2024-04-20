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
          onClick={() => (() => {sayHeyDawg()})()}
          >
          Say Hi
        </button>
        <button
          onClick={() => {sayHey('Jeff')}}
          >
          Say Hi to Jeff
        </button>
        <button
          // Braces can be omitted from function body if single expression is directly returned
          onClick={() => sayHey('Steve')}
          >
          Say Hi to Steve
        </button>
        <button
          onClick={() => (() => (() => (() => (sayHey('AAAAA')))())())()}
          >
            Yell Loudly
          </button>
      </header>
    </div>
  );
}

export default App;
