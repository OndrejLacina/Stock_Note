import React from "react";

function ButtonSmazatOperaci({ op, onDelete }) {
  return (
    <div>
      <li>
        {op.datum || "-"}: {op.kusy > 0 ? "Nákup" : "Prodej"} {op.kusy} ks za{" "}
        {op.cena} Kč (poplatek {op.poplatek} Kč)
        <button onClick={onDelete}>Smazat</button>
      </li>
    </div>
  );
}

export default ButtonSmazatOperaci;
