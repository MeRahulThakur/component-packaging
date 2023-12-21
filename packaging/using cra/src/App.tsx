import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
       <Button text='Button text' size='medium' onClick={() => console.log("Clicked button")} />
       <Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
    </div>
  );
}

export default App;
