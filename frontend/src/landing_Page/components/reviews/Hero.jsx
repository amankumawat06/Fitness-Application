import { useState } from "react";
import reviewsData from "./reviewsData";
import "./style.css";

const Hero = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleReviews = reviewsData.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < reviewsData.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };
  return (
    <>
      <section className="reviews">
        <div className="reviews-container">
          <h2>
            What Our <span>Members Say</span>
          </h2>

          <p className="reviews-subtitle">
            Real feedback from people training with us.
          </p>

          <div className="reviews-grid">
            {visibleReviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="stars">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="review-text">{review.text}</p>
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            ))}
          </div>

          <div className="reviews-nav">
            <button onClick={handlePrev} disabled={startIndex === 0}>
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= reviewsData.length}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
