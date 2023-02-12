import {useState} from 'react';
import './App.css';
import Palette from './components/Palette'

function App() {
  const [bgcolor, setBgcolor] = useState("#c4c3eb")
  const onColorClick = (color) => {
    console.log('Color is ', color)
    setBgcolor(color)
  }
  const copyColorCode = (colorCode) => {
    navigator.clipboard.writeText(colorCode)
    alert(colorCode + " Copied!!")
  }

  return (
    <div className="app" style={{backgroundColor: bgcolor}}>
      <h2>Double click the Color Code to copy <a onClick={() => copyColorCode(bgcolor)}>{bgcolor}</a></h2>
      <Palette onColorClick={onColorClick} />
    </div>
  );
}

export default App;
