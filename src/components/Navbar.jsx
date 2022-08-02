import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ( ) => {
    const [isExpand, setIsExpand] = React.useState(false);

    const navStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'underline' : 'none',
            color: isActive ? 'red': 'lightgreen',
            fontSize: isActive ? '14px' : ' 16px'
        }
    }
  return (
    <>
        <nav className='nav'>
            <div className='nav-class'>
                <img src='https://i.pinimg.com/originals/46/06/8e/46068e21d5582cfa395e1773e760f106.jpg' width='40' height='50' className='image-logo' alt='image'/>
                <h1 className='header-logo'>Agro-tech and sons</h1>
            </div>
            <div className='hamburger'>
                <i className='fas fa-hamburger' onClick={()=>{
                setIsExpand(!isExpand)}}></i>
            </div>
            <div className={isExpand ? 'nav-links' : 'nav-menu'}>
                <NavLink to ="/" style={navStyle}>Register</NavLink>
                <NavLink to="/Login" style={navStyle}>Login</NavLink>
                <NavLink to ="/Dashbord" style={navStyle}>Dashboard</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Navbar