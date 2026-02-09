const DEFAULT_EXERCISES = {
  weight_loss: [
    {
      name: "Jumping Jacks",
      desc: "Full-body cardio move that burns calories fast and warms up your muscles",
      img: "../assets/planBasedExercises/jumping-jacks.png",
    },
    {
      name: "Squats",
      desc: "Strengthens legs and glutes while boosting metabolism and fat burn.",
      img: "../assets/planBasedExercises/squats.jpg",
    },
    {
      name: "Mountain Climbers",
      desc: "High-intensity core exercise that increases heart rate and burns belly fat.",
      img: "../assets/planBasedExercises/mountain-climber.jpg",
    },
    {
      name: "Push-Ups",
      desc: "Builds upper-body strength and helps tone arms, chest, and core.",
      img: "../assets/planBasedExercises/push-ups2.jpeg",
    },
    {
      name: "High Knees",
      desc: "Running in place with knees lifted high — great for fat loss and stamina.",
      img: "../assets/planBasedExercises/high-kness.png",
    },
    {
      name: "Plank",
      desc: "Core-focused hold that tightens abs and improves overall body strength.",
      img: "../assets/planBasedExercises/plank-holder.jpg",
    },
  ],

  weight_gain: [
    {
      name: "Squats",
      desc: "Helps gain muscle in legs and glutes; very important for overall mass.",
      img: "../assets/planBasedExercises/squats.jpg",
    },
    {
      name: "Lunges",
      desc: "Strengthens thighs and glutes while improving balance and muscle control",
      img: "../assets/planBasedExercises/lungs.jpeg",
    },
    {
      name: "Plank Hold",
      desc: "Builds core strength, which supports heavier lifting and better posture.",
      img: "../assets/planBasedExercises/plank-holder.jpg",
    },
    {
      name: "Dips (Chair or Bench)",
      desc: "Targets triceps, shoulders, and chest for upper-body muscle gain.",
      img: "../assets/planBasedExercises/chair-bench.jpeg",
    },
    {
      name: "Push-Ups",
      desc: "Builds chest, shoulders, arms, and core using body weight.",
      img: "../assets/planBasedExercises/push-ups.jpeg",
    },
    {
      name: "Glute Bridges",
      desc: "Strengthens hips and lower body, great for beginners trying to gain muscle.",
      img: "../assets/planBasedExercises/gulte-bridge.jpeg",
    },
  ],

  fitness: [
    {
      name: "Lat Pulldown",
      desc: "Improves back strength, posture, and upper-body control.",
      img: "../assets/planBasedExercises/lat-pulldown.jpg",
    },
    {
      name: "Leg Press",
      desc: "Builds leg strength safely and boosts lower-body power.",
      img: "../assets/planBasedExercises/legPress.jpg",
    },
    {
      name: "Seated Chest Press",
      desc: "Strengthens chest, shoulders, and triceps with controlled movement.",
      img: "../assets/planBasedExercises/chest-press.jpg",
    },
    {
      name: "Cable Row",
      desc: "Enhances mid-back strength and shoulder stability.",
      img: "../assets/planBasedExercises/cable-row.jpg",
    },
    {
      name: "Shoulder Lateral Raises",
      desc: "Improves shoulder shape, stability, and mobility.",
      img: "../assets/planBasedExercises/shoulder-lateral.jpg",
    },
    {
      name: "Back Extension",
      desc: "Strengthens lower back and supports overall body balance.",
      img: "../assets/planBasedExercises/back-extentation.jpg",
    },
  ],
};

import axios from "axios";
import { useEffect, useState } from "react";
import "./member.css";

const Dashboard = () => {
  let [selectedGoal, setSelectedGoal] = useState(null);
  const [loading, setLoading] = useState(true);
  let token = localStorage.getItem("token");
  useEffect(() => {
    const getSelectedPlan = async () => {
      await axios
        .get("http://localhost:8080/api/member/selected-goal", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setSelectedGoal(res.data.goal);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getSelectedPlan();
  }, []);

  if (loading) {
    return <div className="profile-loading">Loading...</div>;
  }

  if (!selectedGoal) {
    return (
      <div className="plan-inset-box empty m-4">
        <p>Your selected plan will appear here</p>
      </div>
    );
  }

  return (
    <>
      <div className="member-plan-page">
        {selectedGoal ? (
          <div className="plan-inset-box">
            <h2 className="plan-title">
              Your Fitness Plan - <span>{selectedGoal.goal}</span>
            </h2>

            <div className="plan-row">
              <span>Plan Name</span>
              <span>{selectedGoal.selectedPlan.planName}</span>
            </div>

            <div className="plan-row">
              <span>Duration</span>
              <span>{selectedGoal.selectedPlan.duration} months</span>
            </div>

            <div className="plan-row">
              <span>Exercises</span>
              <span>{selectedGoal.selectedPlan.exercises}</span>
            </div>
          </div>
        ) : (
          <div className="plan-inset-box empty">
            <p>Your selected plan will appear here</p>
          </div>
        )}
      </div>
      <h4 className="rec-exercises-title">Recommended Exercises</h4>

      <div className="exercise-grid">
        {DEFAULT_EXERCISES[selectedGoal.goal]?.map((ex, index) => (
          <div className="exercise-card" key={index}>
            <div className="exercise-img">
              <img src={ex.img} alt={ex.name} />
            </div>

            <div className="exercise-content">
              <h4>{ex.name}</h4>
              <p>{ex.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
