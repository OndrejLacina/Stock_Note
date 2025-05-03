import React, { useState, useEffect } from "react";
// import ButtonSmazatOperaci nepoužívám zatím

function Operations() {
  // Odsud počítám průměr a vytváří se mi jednotlivé řádky transakcí
  const [operace, setOperace] = useState([]);
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

  const pridejOperaci = () => {
    const { cena, kusy, poplatek, datum } = novaOperace;
    if (!cena || !kusy) return;
    setOperace([
      ...operace,
      {
        cena: parseFloat(cena),
        kusy: parseFloat(kusy),
        poplatek: parseFloat(poplatek) || 0,
        datum,
      },
    ]);
    setNovaOperace({ cena: "", kusy: "", poplatek: "", datum: "" });
  };

  const vypocitejPrumer = () => {
    let totalNaklady = 0;
    let celkemKusu = 0;

    operace.forEach(({ cena, kusy, poplatek }) => {
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      } else {
        // při prodeji snížíme "celkemKusu" a celkové náklady
        totalNaklady += poplatek;
        celkemKusu += kusy;
      }
    });
    return celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
  };

  const smazOperaci = (idx) => {
    setOperace(operace.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <h5 className="mb-3">Průměrná nákupní cena: {vypocitejPrumer()}</h5>
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
          <button className="btn btn-primary" onClick={pridejOperaci}>
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
                  onClick={() => smazOperaci(index)}
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
