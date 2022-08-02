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
        <main className='main-body'>
        <div className='register-header'>
            <h1 className='reg-header'>Login to your dashboard</h1>
        </div>    
            <div className='reg-form'>
                <form className='form-control' onSubmit={handleSubmit}>
                    <div className="first-form">
                        <div>
                            <label>Username</label>
                            <input type='text' name="username" value={state.username} onChange={handleChange} placeholder=" Enter username" required/>
                            <i className='fas fa-user-alt'></i>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type='email' name="email" value={state.email} onChange={handleChange} placeholder="example@gmail.com" required/>
                            <i className='fa-solid fa-envelope'></i>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type = {show ? 'text':'Password'} name="password" value={state.password} onChange={handleChange} placeholder="Enter password" required/>
                            {show ? <i className='fa-solid fa-eye-slash' onClick={()=>setShow((prev)=>!prev)}></i> : <i className='fa-solid fa-eye'onClick={()=>setShow((prev)=>!prev)}></i>}
                        </div>
                    </div>
                    <div className='checkbox'>
                        <label>Remember me</label>
                        <input type='checkbox' name='agree'onChange={handleChange} checked={state.agree}/>
                    </div>
                </form>
                <button className='btn-form'><Link to="/Dashbord">Sign In</Link></button>
                <Link to="/"> Forget password</Link>
                <div className='bottom-group'>
                    <p className='bottom-paragraph'>Don't  have an account?</p>
                    <Link to='/'>Create one!</Link>
                </div>
            </div>
        </main>
    </>
  )
}

export default Login