import React, { useState } from "react";
import axios from "axios"
import {toast, ToastContainer} from "react-toastify"
import { useNavigate,Link } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChanges = (e) => {
    setFormData((currVal) => {
      return {
        ...currVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSuccess = (msg) =>{
     toast.success(msg, {
      position: "bottom-right",
   })
  }

  const handleError = (err) =>{
     toast.error(err, {
      position: "bottom-left",
   })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      let res = await axios.post("http://localhost:8080/signup",formData)
      console.log(`User created successfully!`)

      if(res.data.success){
        handleSuccess(res.data.message)
        setTimeout(() => {  navigate("/login")  }, 1000);
      }else{
        handleError(res.data.message)
      }
    } catch (err) {
      toast.error("Something went wrong!")
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    })
  };

  return (
    <>
    <div className="auth-page">
    <div className="auth-card">
      <h3 className="text-center auth-title">Signup</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column auth-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChanges}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChanges}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChanges}
          required
        />
        <br />
        <button type="submit">Signup</button>

        <div>
          <p>Already have a account?
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
      </div>  
      <ToastContainer />
    </div>
    </>
  );
};

export default Signup;
