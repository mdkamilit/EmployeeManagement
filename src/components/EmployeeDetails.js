import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const EmployeeDetails = () => {
  const [user, setUser] = useState([]);
  const {id}=useParams();
  console.log(id)
  const getUser= async()=>{
       const result=await axios.get(`http://localhost:3003/users/${id}`)
      //  setUser(result)
      //  console.log(result.data)
       setUser([...user,result.data])
      

  }

  useEffect(() => {
      getUser();
  }, []);
  return (
    <div style={{paddingTop:'10px'}}>
         <div className="card card-header mt-10 pt-10">
          <h2 style={{textAlign:'center'}}>Employee details</h2>

          {
            user.length > 0 ?
            user.map((u)=>{
              return (
                <>
                   <p key={u.id}>ID : {u.id}</p> 
                   <p>Name : {u.name}</p>
                   <p>UserName : {u.username}</p>
                   <p>Email : {u.email}</p>
                   <p>Phone : {u.phone}</p>
                   <p>Website : {u.website}</p>


                </>
              )
            }):'No Records Founds'
          }         
      </div>
    </div>
  )
}

export default EmployeeDetails