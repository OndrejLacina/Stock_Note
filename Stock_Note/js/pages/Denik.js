import React from "react";
import FormularAkcie from "../components/FormularAkcie";
import PrispevekAkcie from "../components/PrispevekAkcie";

function Denik({ prispevky, pridejPrispevek, smazPrispevek }) {
  return (
    <div>
      <h2>Deník</h2>
      <FormularAkcie onSubmitForm={pridejPrispevek} />
      <div className="list">
        {prispevky.map((prispevek, indexPrispevku) => (
          <PrispevekAkcie
            key={indexPrispevku}
            text={prispevek}
            onDelete={() => smazPrispevek(indexPrispevku)}
          />
        ))}
      </div>
    </div>
  );
}

export default Denik;
