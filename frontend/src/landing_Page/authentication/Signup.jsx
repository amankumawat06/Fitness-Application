import { useState } from "react";
import axios from "axios"
import {toast, ToastContainer} from "react-toastify"
import { useNavigate,Link } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
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
    setLoading(true)

    try {
      
      let res = await axios.post("https://fitness-application-35y8.vercel.app/api/signup",formData)

      if(res.data.success){
        handleSuccess(res.data.message)
        setTimeout(() => {  navigate("/login")  }, 1000);
      }else{
        handleError(res.data.message)
      }
    } catch (err) {
      toast.error("Something went wrong!")
    } finally{
      setLoading(false)
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
          disabled={loading}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChanges}
          required
          disabled={loading}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChanges}
          required
          disabled={loading}
        />
        <br />
        <button type="submit" className={loading? "disableBtn" :""} disabled={loading}>
          {loading ? "Signing in..." : "Signup" }
        </button>

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
