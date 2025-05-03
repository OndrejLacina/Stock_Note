import React from "react";

function Portfolio({ prispevky }) {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {prispevky.map((prispevek, index) => (
          <li key={index}>{prispevek}</li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
