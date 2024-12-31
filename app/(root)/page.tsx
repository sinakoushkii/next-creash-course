'use client'
import React, { useEffect, useState } from 'react'
import Hello from '../components/Hello'
interface User {
  id:number;
  name: string;
  email:string;
  phone:string;
}

const Home = () => {
  const [userList,setUserList]=useState<User[]>([])

  useEffect(()=>{
    const fetchData=async ()=>{
      const response = await fetch('/api/users')
      const data: User[]=await response.json();
      setUserList(data)
    }

    fetchData();
  },[])

  console.log(userList)
  return (
    <div>
      <h1>Home page</h1>
      <hr />
      <div className='flex flex-col'>
      {userList.length > 0 ? (
          userList.map((user, index) => <span key={index}>{user.name}</span>)
        ) : (
          <p>Loading users...</p>
        )}
      </div>

    </div>
  )
}

export default Home