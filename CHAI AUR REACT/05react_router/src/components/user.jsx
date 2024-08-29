import React from 'react'
import { useParams } from 'react-router-dom';

function user() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-gray-500 p-4 text-3xl'> USER : {userid} </div>
  )
}

export default user