import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate,Link } from "react-router-dom";
import "./style.css"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChanges = (e) => {
    setFormData((curVal) => {
      return {
        ...curVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post("https://fitness-application-rho.vercel.app/login", formData);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        const decoded = jwtDecode(res.data.token);
        const role = decoded.role;

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "trainer") {
          navigate("/trainer/members");
        } else {
          navigate("/member/profile");
        }
        handleSuccess(res.data.message);
        setTimeout(() => {  
          window.location.reload();      // referesh the window automatically while user login
          }, 300);
      }else{
        handleError(res.data.message);
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
    
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
    <div className="auth-page">
      <div className="auth-card">
      
      <h3 className="text-center auth-title">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column auth-form"
      >
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
        <button type="submit">Login</button>

        <div>
          <p>
            Don't have a account?
            <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </form>
      </div>
      <ToastContainer />
      </div>
    </>
  );
};

export default Login;
