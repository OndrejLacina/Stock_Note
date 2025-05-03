import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1>Vítejte ve Stock Note 📈</h1>
      <h5 className="lead">
        Investiční zápisník pro správu vašich akcií a ETF.
      </h5>
      <p>
        <Link to="/portfolio" className="btn btn-success m-2">
          Přejít do Portfolia
        </Link>
        <Link to="/notebook" className="btn btn-primary m-2">
          Přejít do Deníku
        </Link>
      </p>
    </div>
  );
}

export default Home;
