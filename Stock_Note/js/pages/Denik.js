import React from "react";
import FormularAkcie from "../components/FormularAkcie";
import PrispevekAkcie from "../components/PrispevekAkcie";

function Denik({ prispevky, pridejPrispevek, smazPrispevek }) {
  return (
    <div>
      <h2>Deník</h2>
      <FormularAkcie onSubmitForm={pridejPrispevek} />
      <div className="list">
        {prispevky.map((prispevek, index) => (
          <PrispevekAkcie
            key={index}
            text={prispevek}
            onDelete={() => smazPrispevek(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Denik;
