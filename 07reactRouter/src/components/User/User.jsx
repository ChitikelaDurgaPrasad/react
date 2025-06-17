import React from 'react'
import { useParams } from 'react-router'

const User = () => {
const {userId} = useParams()
  return (
    <div className='bg-orange-300 py-4 text-center'>User: {userId}</div>
  )
}

export default User