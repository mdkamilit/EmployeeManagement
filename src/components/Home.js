import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Home = () => {
  const [usersList, setUsersList] = useState([]);
  const getAllUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsersList(result.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []); 

  const removeUser=(Id)=>{
   const updateUser=usersList.filter((user)=>{
    return user.id!==Id
   })
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      setUsersList(updateUser)
    }
    else {
          return false
    }
  })
   
  }
  return (
    <div>
      <h2>
        <strong>Employee List</strong>
      </h2>

      <table className="table">
        <thead className="thead-light">
          <tr style={{textTransform:'capitalize'}}>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

           {
            usersList.length > 0?
            usersList.map((user,index)=>{
                return (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td colSpan={4}>
                          <Link className="btn btn-primary m-1" to={`/user/employeedetails/${user.id}`}><i className="fa fa-eye" aria-hidden="true" title="View"></i></Link>
                            <Link className="btn btn-outline-success m-1 " to={`/user/edit/${user.id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                            <Link className="btn btn-danger m-1"onClick={()=>removeUser(user.id)} ><i className="fa fa-trash" aria-hidden="true" title="Delete" ></i></Link>
                        </td>
                    </tr>
                )
            }):<h2 aria-colspan={5} style={{textAlign:'center',marginLeft:'285px', paddingTop:'10px'}}> No Records Found </h2>
           }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
