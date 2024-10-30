import React from 'react'
import { useParams } from 'react-router-dom'

function Overview() {
    const {name}=useParams<{name:string}>()
  return (
    <div>
        <h1 className='font-bld text-btn text-2xl'>{name}</h1>
    </div>
  )
}

export default Overview
