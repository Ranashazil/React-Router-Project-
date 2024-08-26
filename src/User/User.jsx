import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {ourId} = useParams()
  return (
    <div className="bg-red-600 text-gray-600 hover:text-white hover:font-bold max-w-md mx-auto cursor-pointer p-4  rounded-lg">User: {ourId}</div>
  )
}

export default User