import React from 'react'
import { Link } from 'react-router-dom'

const Nopage = () => {
  return (
    <>
      <div className='error'>
        <h1 className='error-message'>
          Ooops! You have enter a wrong route! Pease click on the button below to sign up.
        </h1>
        <button className='btn-form'><Link to="/Login">Sign Up</Link></button>
      </div>
    </>
  )
}

export default Nopage