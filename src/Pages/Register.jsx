import React,{ useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import authApi from '../API/AuthAPI'
function Register() {
      const [user,setUSer]=useState({
        name:"",
        mobile:"",
        email:"",
        password:""
        })
        const navigate=useNavigate()
        const readInput=(e)=>{
            const {name,value}=e.target
            setUSer({...user,[name]:value})
        }
        const submitHandler=async(e)=>{
            e.preventDefault()
           try{
            console.log('user=',user)
            await authApi.register(user).then(res=>{
              toast.success(res.data.msg)
              navigate('/login')
            }).catch(err=>toast.error(err.response.data.msg))
           }catch(err){
            return toast.error(err.message)
           }
        }
  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-header text-center">
                    <h3 className='card-title text-secondary'>Register</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler} method='post' autoComplete='off' >
                    <div className='form-group mt-2'>
                    <label htmlFor="name">Your name</label>
                      <input type="text" name="name" id="name" value={user.name} onChange={readInput} required className='form-control' />
                      </div>
                    <div className='form-group mt-2'>
                    <label htmlFor="name">Your mobile</label>
                      <input type="text" name="mobile" id="mobile" value={user.mobile} onChange={readInput} required className='form-control' />
                      </div>
                  </form>
                    <form onSubmit={submitHandler} method="post" autoComplete='off'>
                      <div className="form-group mt-2">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" id="email" className='form-control' value={user.email} onChange={readInput} required placeholder='email'/>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="password">Your Password</label>
                        <input type="password" name="password" id="password" className='form-control' value={user.password} onChange={readInput} required  placeholder='password'/>
                      </div>
                      <div className='form-group mt-2'>
                        <input type="submit" value="Register" className='btn btn-outline-secondary'/>
                      </div>
                    </form>
                </div>
                <div className='card-footer'>
                 <p className='text-secondary'>
                    Already registered  <NavLink to="/register" className="btn btn-link">Login Here</NavLink>
                 </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
