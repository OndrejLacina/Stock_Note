import React from "react";

function Portfolio({ prispevky }) {
  return (
    <div className="container mt-5">
      <h2>Portfolio</h2>
      {prispevky.length === 0 ? (
        <p>Nemáte žádné přidané akcie</p>
      ) : (
        <ul className="list-group">
          {prispevky.map((prispevek, index) => (
            <li key={index} className="list-group-item">
              {prispevek.ticker} - počet operací : {prispevek.operace.length}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Portfolio;
