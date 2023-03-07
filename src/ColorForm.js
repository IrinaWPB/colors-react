import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './ColorForm.css'


const ColorForm = ({ addColor }) => {
    const navigate = useNavigate()
    const [color, setColor] = useState({name: '', color: ''})
    const handleChange = (e) => {
        const {name, value} = e.target
        setColor(color => ({
            ...color,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
        navigate('/colors')
    }
    return (
        <div className='ColorForm'>
          <h1>Color Form</h1>  
          <form>
            <label htmlFor="name">Enter a name for the color:</label>
            <input id="name" name="name" type='text' value={color.name} onChange={handleChange}></input>
            <label htmlFor="color">Choose a new color:</label>
            <input id="color" name="color" type='color' value={color.color} onChange={handleChange}></input>
            <button onClick={handleSubmit}>Add color</button>
           </form>
        </div>
    )
}
export default ColorForm