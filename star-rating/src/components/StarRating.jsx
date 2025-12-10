import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: star <= (hover || rating) ? "#FFFF8A" : "#C4C4C4",
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
        <p>Rating: {rating}</p>
      </div>
    </>
  );
};

export default StarRating;
