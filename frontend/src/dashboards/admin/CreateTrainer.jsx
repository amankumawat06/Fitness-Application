import { Link, useNavigate } from "react-router-dom";
import "./admin.css"
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const CreateTrainer = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    specialization:"",
    password:""
  })

  const handleInputChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSuccess = (msg) => {
    toast.success(msg, {
          position: "bottom-right",
       })
  }

   const handleError = (err) => {
    toast.success(err, {
          position: "bottom-right",
       })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      let token = localStorage.getItem("token")
      let res = await axios.post("http://localhost:8080/admin/create-trainer", formData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      console.log("trainer created successfully",res)

      if(res.data.success){
        handleSuccess(res.data.message)
        setTimeout(() => navigate("/admin/trainers") ,1000);
      }else{
        handleError(res.data.message)
      }
    }catch(err){
      toast.error("Something went wrong!!")
    }

    setFormData({
      name: "",
      email: "",
      specialization:"",
      password:""
    })

  }

  return (
    <>
      <div className="auth-page">
        <div className="auth-card">
          <h3 className="text-center auth-title">Create Trainer</h3>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column auth-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter trainer name"
              value={formData.name}
              onChange={handleInputChanges}
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter trainer email"
              value={formData.email}
              onChange={handleInputChanges}
              required
            />
            <br />
            <input
              type="text"
              name="specialization"
              placeholder="What is your specialization"
              value={formData.specialization}
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
            <button type="submit">Create</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default CreateTrainer;
