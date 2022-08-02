import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const[person, setPerson] = useState([])
  useEffect(()=>{
    const newUser = JSON.stringify('')
    const user = JSON.parse(localStorage.getItem("newUser"));
    if(user){
      setPerson(user)
    }
    else{
      localStorage.setItem("newUser",newUser)
    }

  }, [])
  return (
    <>
      <div className='header-class'>
        <h1 className='header'>welcome to your dashboard {person.username}</h1>
        <p className='email'>Here is your valid email {person.email}</p>
        <p className = 'header'>You are entitled to full scholarship in our institution</p>
      </div>
    </>
  )
}

export default Dashboard