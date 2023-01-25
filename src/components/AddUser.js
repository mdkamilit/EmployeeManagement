import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const InputChange = (e) => {
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() === "" &&
      user.username.trim() == "" &&
      user.email.trim() == "" &&
      user.phone.trim() === "" &&
      user.website.trim() == ""
    ) {
      toast("All Fields are required !", {
        position: "top-right",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else if (user) {
      // e.preventDefault();
      await axios.post("http://localhost:3003/users", user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
      setUser({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
    } else {
      toast("All Fields are required", {
        position: "top-right",
        autoClose: 1100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-5 ">
          <h2 className="text-center mb-4">Add User</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group m-2 ">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter your Name"
                value={user.name}
                onChange={(e) => InputChange(e)}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                name="username"
                className="form-control form-control-lg"
                placeholder="Enter your UserName"
                value={user.username}
                onChange={(e) => InputChange(e)}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter your Email"
                value={user.email}
                onChange={(e) => InputChange(e)}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg col-md-4"
                placeholder="Enter your Phone No"
                value={user.phone}
                onChange={(e) => InputChange(e)}
              />
            </div>
            <div className="form-group m-2">
              <input
                type="text"
                name="website"
                className="form-control form-control-lg"
                placeholder="Enter your Website"
                value={user.website}
                onChange={(e) => InputChange(e)}
              />
            </div>
            <div className="form-group m-2">
              <button className="btn btn-outline-success form-control w-25 m-1">
                Submit
              </button>
              <Link to={"/"}>
                <button className="btn btn-primary form-control w-25">
                  Cancel
                </button>
              </Link>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
