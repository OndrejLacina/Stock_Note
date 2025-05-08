import React from "react";

function Portfolio({ prispevky }) {
  // Spočítat průměrnou cenu
  const spocitejPrumer = (prispevek) => {
    const operace = prispevek.operace;
    let totalNaklady = 0;
    let celkemKusu = 0;

    operace.forEach(({ cena, kusy, poplatek }) => {
      if (kusy > 0) {
        totalNaklady += cena * kusy + poplatek;
        celkemKusu += kusy;
      }
    });

    return celkemKusu > 0 ? (totalNaklady / celkemKusu).toFixed(2) : "-";
  };

  // Spočítat celkový počet kusů (počítá i prodeje, tedy záporné kusy)
  const spocitejTotalKusy = (prispevek) => {
    return prispevek.operace.reduce((sum, op) => sum + op.kusy, 0);
  };

  // Spočítat součet všech poplatků (náklady)
  const spocitejPoplatky = (prispevek) => {
    return prispevek.operace.reduce((sum, op) => sum + op.poplatek, 0);
  };

  // Spočítat celkově zainvestované peníze (jen nákupy)
  const spocitejTotalInvestovano = (prispevek) => {
    return prispevek.operace
      .filter((op) => op.kusy > 0) // jen nákupy
      .reduce((sum, op) => sum + op.cena * op.kusy + op.poplatek, 0)
      .toFixed(2);
  };

  // (VOLITELNÉ) Alokaci dopočítáme až budeme mít total portfolio value

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Portfolio</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-primary">
            <tr>
              <th>Ticker</th>
              <th>Průměrná cena [Kč]</th>
              <th>Počet kusů</th>
              <th>Součet poplatků [Kč]</th>
              <th>Celkem investováno [Kč]</th>
            </tr>
          </thead>
          <tbody>
            {prispevky.map((prispevek, index) => (
              <tr key={index}>
                <td>{prispevek.ticker}</td>
                <td>{spocitejPrumer(prispevek)}</td>
                <td>{spocitejTotalKusy(prispevek)}</td>
                <td>{spocitejPoplatky(prispevek)}</td>
                <td>{spocitejTotalInvestovano(prispevek)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Portfolio;

// function Portfolio({ prispevky }) {
//   return (
//     <div className="container mt-5">
//       <h2>Portfolio</h2>
//       {prispevky.length === 0 ? (
//         <p>Nemáte žádné přidané akcie</p>
//       ) : (
//         <ul className="list-group">
//           {prispevky.map((prispevek, index) => (
//             <li key={index} className="list-group-item">
//               {prispevek.ticker} - počet operací : {prispevek.operace.length}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
