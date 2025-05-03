import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Vítejte ve Stock Note 📈</h1>
      <h5>Investiční zápisník pro správu vašich akcií a ETF.</h5>
      <p>
        <Link to="/portfolio">Přejít do Portfolia</Link>
        <Link to="/notebook">Přejít do Deníku</Link>
      </p>
    </div>
  );
}

export default Home;
