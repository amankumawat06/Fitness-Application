import { useState } from "react";
import "./member.css";

const BMIChecker = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
  });
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const handleChanges = (e) => {
    setFormData((currVal) => {
      return {
        ...currVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!formData.height || !formData.weight) {
      alert("Please enter height & weight!");
      return;
    }

    const height = parseFloat(formData.height);
    const weight = parseFloat(formData.weight);

    const heightInMeters = height / 100;

    const bmiValue = (weight / heightInMeters ** 2).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight 🥺");
    else if (bmiValue < 25) setStatus("Normal 💪");
    else if (bmiValue < 30) setStatus("Overweight 😅");
    else setStatus("Obese ⚠️");

    setTimeout(() => {
      setBmi(null);
      setStatus("");

      setFormData({
        height: "",
        weight: "",
      });
    }, 4000);
  };

  return (
    <div className="bmi-page">
      <div className="bmi-card">
        <h2>
          BMI <span>Calculator</span>
        </h2>

        <p className="bmi-subtitle">Check your Body Mass Index instantly</p>

        <form onSubmit={calculateBMI} className="bmi-inputs">
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChanges}
          />

          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChanges}
          />

          <button type="submit">Calculate BMI</button>
        </form>

        {bmi && (
          <div className="bmi-result">
            <h3>Your BMI</h3>
            <div className="bmi-value">{bmi}</div>

            <p className={`bmi-status ${status.toLowerCase()}`}>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMIChecker;
