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
      <h3 className="text-center mt-4">Signup</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column col-lg-6 col-md-8 col-12 offset-0 justify-content-center m-5"
      >
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={formData.name}
          onChange={handleInputChanges}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={formData.email}
          onChange={handleInputChanges}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={formData.password}
          onChange={handleInputChanges}
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
      <ToastContainer />
    </>
  );
};

export default Signup;
