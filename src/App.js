import React, {useState} from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Color from './Color'
import ColorForm from './ColorForm'
import ColorList from './ColorList'


function App() {
  const [colors, setColors] = useState([{name: 'white',
                                         color: '#FFFFFF'},
                                        {name: 'black',
                                         color: '#000000'}])
  const addColor = (color) => {
        setColors(colors=>[...colors, color])
    }
  return (
    <div>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors}/>} />
        <Route path="/colors/new" element={<ColorForm addColor={addColor}/>} />
        <Route path="/colors/:color" element={<Color colors={colors}/>} />
        <Route path="*" element={<Navigate to='/colors' />} />
      </Routes>
    </div>
  );
}

export default App;
