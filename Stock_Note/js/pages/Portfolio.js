import React from "react";

function Portfolio({ prispevky }) {
  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {prispevky.map((prispevek, indexPrispevku) => (
          <li key={indexPrispevku}>{prispevek}</li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
