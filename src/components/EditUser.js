import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useNavigate,useParams ,Link} from 'react-router-dom'
import Swal from 'sweetalert2';

const EditUser = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    // console.log(id);
  const [user, setUser] = useState({
    name:'',
    username:'',
    email:'',    
  });
const InputChange=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })

}
const getAllUsers=async()=>{
   const user=await axios.get(`http://localhost:3003/users/${id}`)
   console.log(user)
   setUser(user.data)
}
useEffect(() => {
    getAllUsers();
}, []);
const onSubmit= async e=>{
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`,user)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })
    navigate('/')
    setUser({
        name:'',
        username:'',
        email:'',       
    })
}

  return (
    <>
    <div className="container">
        <div className='w-75 mx-auto shadow p-5 mt-5 '>
            <h2 className='text-center mb-4'>Update User</h2>
            <form >
                <div className="form-group m-2 ">
                    <input type="text" name="name" className='form-control form-control-lg'
                     placeholder='Enter your Name' value={user.name} onChange={e=>InputChange(e)}
                    />
                </div>
                <div className="form-group m-2">
                    <input type="text" name="username" className='form-control form-control-lg'
                     placeholder='Enter your UserName' value={user.username} onChange={e=>InputChange(e)}
                    />
                </div>
                <div className="form-group m-2">
                    <input type="text" name="email" className='form-control form-control-lg'
                     placeholder='Enter your Email' value={user.email} onChange={e=>InputChange(e)}
                    />
                </div>            
               
                <div className='form-group m-2'>
                    <button className='btn btn-outline-success form-control w-25 m-1' onClick={onSubmit}>Update</button> 
                    <Link to={'/'}><button className='btn btn-primary form-control w-25'>Cancel</button></Link>
                </div>
            </form>

        </div>
    </div>
        
    </>
  )
}

export default EditUser