import { useNavigate } from "react-router-dom";
import notFoundImg from "/assets/pagenotfound2.png"; 
import "./index.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/")
  }

  return (
    <div className="notFound-wrapper">
        <div className="img-container">
            <img src={notFoundImg} className="img"/>
        </div>
        <div className="overlay">
            <button onClick={backToHome} className="back-home-btn"> ←Back to Home</button>
        </div>
    </div>
  );
};

export default PageNotFound;

