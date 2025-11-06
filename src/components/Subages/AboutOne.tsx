import React from 'react'
import { useParams } from 'react-router-dom'

const AboutOne = ({params}:any) => {
    const {id} = useParams()
  return (
    <div>
        {id}
    </div>
  )
}

export default AboutOne