import React from 'react'
import {Link} from 'react-router-dom'
import './ColorList.css'

const ColorList = ({colors}) => {
    return (
        <div>
            <div className="ColorList-head">
              <h3>Welcome to the color factory.</h3>
              <Link to='/colors/new'>Add a color</Link>  
            </div>
            <div className='ColorList-list'>
                <p>Please select color:</p>
                <div>
                    {colors.map(color=>(
                    <p key={color.color} ><Link key={color.name} to={`/colors/${color.name}`}>{color.name}</Link></p>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default ColorList