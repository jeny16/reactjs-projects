import React, { useEffect, useState } from 'react'

export const GitHub = () => {

    const[data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/jeny16')
        .then(Response => Response.json())
        .then(data => {
             console.log(data)
             setData(data)
        })
    }, [])
    

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} width={300}  alt="" />
    </div>
  )
}

