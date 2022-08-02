import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <footer>
          <img src='https://i.pinimg.com/originals/46/06/8e/46068e21d5582cfa395e1773e760f106.jpg' width='40' height='50' className='image-logo'/>
          <ul className='social-icons'>
            <li>
              <Link to = "https://www.twitter.com" className='social-icon'>
                <i className='fab fa-facebook'></i>
              </Link>
            </li>
            <li>
              <Link to = "https://www.twitter.com" className='social-icon'>
                <i className='fab fa-twitter'></i>
              </Link>
            </li>
            <li>
              <Link to = "https://www.twitter.com" className='social-icon'>
                <i className='fab fa-instagram'></i>
              </Link>
            </li>
          </ul>
          <p>&copy;2022 Agrotech and sons. All rights reserved</p>
      </footer>
    </>
  )
}
export default Footer