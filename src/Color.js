import { useParams, Link, Navigate } from'react-router-dom'
import './Color.css'

const Color = ({colors}) => {
    const { color } = useParams()
    const currColor = colors.filter(c=>c.name === color)[0]

    return ( !currColor ? <Navigate to='/colors' /> :
        <div className='Color' style={{backgroundColor: currColor.color}}>
            <h1>This is {color}</h1>
            <h2>Isn't it beautiful?</h2>
            <p><Link to='/colors'>Go Back</Link></p>
        </div>
    )
}

export default Color