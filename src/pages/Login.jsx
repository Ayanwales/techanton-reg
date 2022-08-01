import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const initialValues=({
        username: "",
        email: "",
        password: "",
    })
    const [state, setState] = React.useState(initialValues);
    const [show, setShow] = React.useState(false);
    const handleChange = (e)=>{
        const value = e.target.type ===  "checkbox" ?
        e.target.checked : e.target.value;
        setState({
            ...state, [e.target.name]:value
        })
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        const newUser = JSON.stringify(state);
        localStorage.getItem('newUser') === null && 
        localStorage.setItem('newUser', newUser);
        navigate('/Dashboard')
    }
  return (
    <>
        <div className='login-form'>
            <form className='form-control' onSubmit={handleSubmit}>
                <label>
                    Username
                    <input type='text' name="username" value={state.username} onChange={handleChange} placeholder=" Enter username" required/>
                </label>
                <label>
                    Email Address
                    <input type='email' name="email" value={state.email} onChange={handleChange} placeholder="example@gmail.com" required/>
                </label>
                <label>
                    Password
                    <input type={show ? 'text':'Password'} name="password" value={state.password} onChange={handleChange} placeholder="Enter password" required/>
                </label>
                <label>
                    Remember me
                    <input type='checkbox' name='agree'onChange={handleChange} checked={state.agree}/>
                </label>
                <Link to = "/Register"> Forget password</Link>
            </form>
            <button className='btn-form'><Link to="/Dashbord">Sign In</Link></button>
            <div className='bottom-grp'>
                <p className='bottom-paragraph'>Dont  have an account?</p>
                <Link to='/Login'>Create one!</Link>
            </div>
        </div>
    </>
  )
}

export default Login