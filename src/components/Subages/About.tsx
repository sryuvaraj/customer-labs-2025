import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const ex = [1,2,3,4,5,6]
  return (
    <div>
        {ex.length>0&& ex.map((i:any,index:number) => <div key={index}><Link to={`/about/${i}`}>GoStep{i}</Link></div>)}
    </div>
  )
}

export default About