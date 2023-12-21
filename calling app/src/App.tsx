import './App.css'
import { Button, Input } from "react-cmp-lib" 
import {Button as CRA_Button, Input as CRA_Input } from "react-cra-packaging"
import {Button as V_Button, Input as V_Input} from "react-packaging"

function App() {

  return (
    <>
      <div>
        <h4>React CMP Lib</h4>
        <Button label="Building Stuff is fun again" />
        <Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
      </div>
      <div>
          <h4>Lib using React CRA</h4>
          <CRA_Button text="Button text"/>
          <CRA_Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
      </div>
      <div>
          <h4>Lib using React Vite </h4>
          <V_Button text="Button text" size='large' primary='true' />
          <V_Input id='inputfield' onChange={(e) => console.log(e.target.value)} placeholder='Sample placeholder' />
      </div>
      
    </>
  )
}

export default App
