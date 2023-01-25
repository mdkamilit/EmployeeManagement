import React,{useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./globalstyle.css";

const Contact = () => {
  const [usercontact, setUsercontact] = useState({
    email:"",
    password:""
  });
  const [flag, setflag] = useState(false);
  const handleInput=(e)=>{
    // const [name,value]=e.target;
     setUsercontact({
      ...usercontact,
      [e.target.name]:e.target.value
     })

  }
  const handleSubmit=e=>{
    e.preventDefault();
    setflag(true)
    // console.log(usercontact);
    Swal.fire('Thanks for Contacting,We will connect with you shortly')
    setUsercontact({
      email:'',
      password:''
    })   

  }
  return (
    <>
      <h2 style={{ padding: "10px 0px 0px 390px" }}>
        <strong>Contact Us</strong>
      </h2>
      <div className="card card-header">
        {/* <div className="jumbotron"> */}
        <form onSubmit={handleSubmit}
          style={{ alignContent: "center", padding: "50px 50px 50px 280px" }}
        >
          <div className="col-md-4">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"            
              placeholder="Enter email"
              name="email"
              value={usercontact.email}
              onChange={(e)=>handleInput(e)}
            />
          </div>
          <br></br>
          <div className="col-md-4">
            <label >Password</label>
            <input
              type="password"
              className="form-control"             
              placeholder="Password"
              name="password"
              value={usercontact.password}
              onChange={(e)=>handleInput(e)}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-outline-success" >
              Submit
          </button>
        </form>       
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
