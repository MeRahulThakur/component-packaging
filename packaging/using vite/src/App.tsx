import './App.css'
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {

  return (
    <>
      <Button text='Button text' size='medium' onClick={() => console.log("Clicked button")} primary/>
       <Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
    </>
  )
}

export default App
