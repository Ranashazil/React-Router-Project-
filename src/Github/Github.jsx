import React  from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const adddata = useLoaderData()

  // ye tareeke se hamne jana k github ki api ham useeffect se kese fetch krte hain mtlb use effect se kese krte hain 


//     const [adddata, setaddData] = useState([])
// useEffect(() => {
// fetch("https://api.github.com/users/Ranashazil")
// .then(response=> response.json())
// .then(adddata =>{
//     console.log(adddata);
//     setaddData(adddata)
// })
// }, [])

// iska mtlb k hm github ki loader infromatiion se ham kese fetch krte hain  // is se ye ha k lag wagera nai hota jldi ek page se doosre pr navigate ho jata ha 
  return (
    <div className='bg-gray-800 mt-2 mb-3 text-white p-4 rounded-lg font-bold  max-w-md mx-auto'>Github Followers: {adddata.followers}
    <img className='' src={adddata.avatar_url}  alt="git pic"  width={100}/>
     </div>

  )
}

export default Github

// you can aslo fetch the value like this...using loader

export const infoLoader = async()=>{
  const mine = await fetch('https://api.github.com/users/Ranashazil')
  return mine.json() 
}