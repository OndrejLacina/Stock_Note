import React from "react";
import FormularAkcie from "../components/FormularAkcie";
import PrispevekAkcie from "../components/PrispevekAkcie";

function Denik({
  prispevky,
  pridejPrispevek,
  smazPrispevek,
  pridejOperaci,
  smazOperaci,
}) {
  return (
    <div>
      <h2>Deník</h2>
      <FormularAkcie onSubmitForm={pridejPrispevek} />
      <div className="list">
        {prispevky.map((prispevek, index) => (
          <PrispevekAkcie
            key={index}
            prispevek={prispevek}
            indexPrispevku={index}
            onDelete={() => smazPrispevek(index)}
            onAddOperace={pridejOperaci}
            onDeleteOperace={smazOperaci}
          />
        ))}
      </div>
    </div>
  );
}

export default Denik;
