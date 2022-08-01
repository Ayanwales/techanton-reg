import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const initialValues = ({
        username: "",
        firstname: "",
        lastname: "",
        occupation: "",
        email: "",
        password: "",
        confirm: "",
        number: "",
        birthday: "",
        gender: "",
        status: "",
        course: "",
        level: "",
        agree: false
    });

    const navigate = useNavigate()

    const [state, setState] = React.useState(initialValues);
    const [show, setShow] = React.useState(false)
    const handleChange = (e)=>{
        const value = e.target.type === "checkbox" ?
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
        navigate('/Login')
    }
  return (
    <>
        <div className='register-header'>
            <h1 className='reg-header'> Create an Account</h1>
        </div>
        <div className='reg-form'>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className="first-form">
                    <div>
                        <label>Username</label>
                        <input type='text' name="username" value={state.username} onChange={handleChange} placeholder=" Enter username" required/>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input type='text' name="firstname" value={state.firstname} onChange={handleChange} placeholder=" Enter firstname" required/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' name="lastname" value={state.lastname} onChange={handleChange} placeholder="Enter lastname" required/>
                    </div>
                </div>
                <div className='second-form'>
                    <div>
                        <label>Occupation</label>
                        <input type='text' name="occupation" value={state.occupation} onChange={handleChange} placeholder="software Developer" required/>
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type='email' name="email" value={state.email} onChange={handleChange} placeholder="example@gmail.com" required/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type = {show ? 'text':'Password'} name="password" value={state.password} onChange={handleChange} placeholder="Enter password" required/>
                        <button className='btn-password' onClick={()=>setShow((prev)=>!prev)}>Show</button>
                    </div>
                </div>
                <div className='third-form'>
                    <div>
                        <label>Confirm Password</label>                
                        <input type= {show ? 'text' : 'password'} name="confirm" value={state.confirm} onChange={handleChange} placeholder="Confirmed password" required/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type='number' name="number" value={state.number} onChange={handleChange} placeholder="Enter your phone number" required/>
                    </div>
                    <div>
                        <label>Birthday</label>
                        <input type='date' name="birthday" value={state.birthday} onChange={handleChange} placeholder="mm/dd/yyy" required/>
                    </div>
                </div>
                <div className='fourth-form'>
                    <div>
                        <label>Gender</label>
                        <select name='gender'value={state.gender} onChange={handleChange} placeholder='choose a gender'>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div>
                        <label>Marital Status</label>
                        <select name='status' value={state.status} onChange={handleChange} placeholder='select your status'>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Complicated">Complicated</option>
                        </select>
                    </div>
                    <div>
                        <label>Course</label>
                            <select name='course' value={state.course} onChange={handleChange} placeholder ='Choose a course'>
                                <option value="Animal husbandry">Animal Husbandry</option>
                                <option value="Fishery">Fishery</option>
                                <option value="snailry">Snailry</option>
                                <option value="palm oil oroduction">palm oil production</option>
                                <option value="Cassava Cultivation">Casssava Cultivation</option>
                            </select>
                    </div>
                </div>
                <div className='fifth-form'>
                
                        <p>level</p>
                        <div>
                            <label>Beginner</label>
                            <input type='radio' name='level' value= "beginner" onChange={handleChange} checked={state.level ==="beginner"}/>
                        </div>
                        <div>
                            <label>Intermediate</label>
                            <input type='radio' name='level' value="intermediate" onChange={handleChange} checked={state.level ==="intermediate"}/>
                        </div>
                        <div>
                            <label>Advanced</label>
                            <input type='radio' name='level' value="advanced" onChange={handleChange} checked={state.level ==="advanced"}/>
                        </div>
                        <div>
                            <label>Expert</label>
                            <input type='radio' name='level' value="expert" onChange={handleChange} checked={state.level ==="expert"}/>
                        </div>
                    
                </div>
                    <div className='checkbox'>
                        <input type='checkbox' name='agree'onChange={handleChange} checked={state.agree}/>
                        <label>I agree with the terms and condition</label> 
                    </div>
            </form>
            <button className='btn-form'><Link to="/Login">Sign Up</Link></button>
            <div className='bottom-group'>
                <p className='bottom-paragraph'>Already have an account?</p>
                <Link to='/login'>Sign in</Link>
            </div>
        </div>
    </>
  )
}
export default Register;