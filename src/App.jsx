import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'
import ColorBox from './Components/ColorBox'

function App() {
  const color = ['pink', 'aqua', 'green', 'blue', 'red', 'lightcoral',"silver"]
  const [selectdColor,setselectedColor] = useState('red')
  return (
    <>
      <h1>🎨Color Switcher</h1>
        <div >
      {
        color.map(function (item) {
          return (<Button key={item} color={item} setselectedColor ={setselectedColor}>
           {item}
          </Button>
          )
        })
      }
           <ColorBox Color={selectdColor} />

    </div>
    </>
  )
}

export default App
