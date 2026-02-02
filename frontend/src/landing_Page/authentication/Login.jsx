import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate,Link } from "react-router-dom";

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
      let res = await axios.post("http://localhost:8080/login", formData);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        const decoded = jwtDecode(res.data.token);
        const role = decoded.role;

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "trainer") {
          navigate("/trainer/dashboard");
        } else {
          navigate("/member/dashboard");
        }
        handleSuccess(res.data.message);
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
      <h3 className="text-center mt-4">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column col-lg-6 col-md-8 col-12 offset-0 justify-content-center m-5"
      >
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
        <button type="submit">Login</button>

        <div>
          <p>
            Don't have a accoutn
            <Link to="/signup">Create Account</Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
