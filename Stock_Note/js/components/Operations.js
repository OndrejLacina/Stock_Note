import React, { useState, useEffect } from "react";
// import ButtonSmazatOperaci nepoužívám zatím

function Operations({
  operace,
  indexPrispevku,
  onAddOperace,
  onDeleteOperace,
}) {
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
  const [novaOperace, setNovaOperace] = useState({
    cena: "",
    kusy: "",
    poplatek: "",
    datum: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovaOperace({ ...novaOperace, [name]: value });
  };

  const pridejNovouOperaci = () => {
    if (!novaOperace.cena || !novaOperace.kusy) {
      alert("Vyplň cenu a počet kusů!");
      return;
    }

    onAddOperace(indexPrispevku, {
      cena: parseFloat(novaOperace.cena),
      kusy: parseFloat(novaOperace.kusy),
      poplatek: parseFloat(novaOperace.poplatek) || 0,
      datum: novaOperace.datum || "-",
    });

    setNovaOperace({ cena: "", kusy: "", poplatek: "", datum: "" });
  };

  const vypocitejPrumer = () => {
    let nakupniCena = 0;
    let celkemKusu = 0;
    let celkemPoplatku = 0;

    operace.forEach(({ cena, kusy, poplatek }) => {
      if (kusy > 0) {
        nakupniCena += cena * kusy + poplatek;
        celkemKusu += kusy;
        celkemPoplatku += poplatek;
      } else {
        // při prodeji snížíme "celkemKusu" a celkové náklady
        celkemKusu += kusy;
        nakupniCena += poplatek;
      }
    });

    const prumernaCena =
      celkemKusu > 0 ? (nakupniCena / celkemKusu).toFixed(2) : "-";

    return {
      prumernaCena,
      celkemKusu,
      celkemPoplatku,
    };
  };

  return (
    <div>
      <div>
        <p className="mb-3">
          Průměrná nákupní cena: {vypocitejPrumer().prumernaCena}
        </p>
        <p className="mb-3">Počet kusů: {vypocitejPrumer().celkemKusu} </p>
        <p className="mb-3">
          Součet poplatků: {vypocitejPrumer().celkemPoplatku}
        </p>
      </div>

      <h6>Nová operace</h6>
      <div className="row g-2 align-items-center mb-3">
        <div className="col">
          <input
            type="number"
            name="cena"
            value={novaOperace.cena}
            onChange={handleChange}
            placeholder="Cena za kus"
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="number"
            name="kusy"
            value={novaOperace.kusy}
            onChange={handleChange}
            placeholder="Počet kusů"
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="number"
            name="poplatek"
            value={novaOperace.poplatek}
            onChange={handleChange}
            placeholder="Poplatek"
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="date"
            name="datum"
            value={novaOperace.datum}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary" onClick={pridejNovouOperaci}>
            Přidat
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Datum</th>
            <th>Typ</th>
            <th>Kusy</th>
            <th>Cena</th>
            <th>Poplatek</th>
            <th>Akce</th>
          </tr>
        </thead>
        <tbody>
          {operace.map((op, index) => (
            <tr key={index}>
              <td>{op.datum || "—"}</td>
              <td>{op.kusy > 0 ? "Nákup" : "Prodej"}</td>
              <td>{op.kusy}</td>
              <td>{op.cena} Kč</td>
              <td>{op.poplatek} Kč</td>
              <td>
                <button
                  onClick={() => onDeleteOperace(indexPrispevku, index)}
                  className="btn btn-sm btn-danger"
                >
                  Smazat
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Operations;
