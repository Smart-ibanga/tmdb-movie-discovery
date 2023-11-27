import React, { useState } from "react";

const Favourite = () => {
  const [isLoved, setIsLoved] = useState(false);

  const handleLoveClick = () => {
    setIsLoved(!isLoved);
  };

  return (
    <div>
      <button onClick={handleLoveClick} className={`love-button${isLoved ? 'loved' : ''}`}>{isLoved ? "❤️" : "🤍"}</button>
    </div>
  );
};

export default Favourite;
