import React, { useState, useEffect } from "react";
import Operations from "./Operations";

function PrispevekAkcie({ text, onDelete }) {
  // tady budu mít prázdný pole aka [] a sem budu pushovat po kliknutí na zadání akcie, zadání příspěvěku, sem to potřebuju odeslat a to se pak odešle do app.js celá tato funkce --- NA KOMUNIKACI MEZI KOMPONENTAMI POUŽÍVÁM `PROPS` - PROPS  nemusím pouřívat jen jako atributy těch html značek, ale můžu je použít i ve funkcích

  // Kód pro přidání jednotlivé operace Nákup/Prodej pro akcii

  // 1. parametr - callback
  // 2. paramter - dependencies - závislosti
  useEffect(() => {
    // mount komponentu
    console.log("Prispevek začal cestu");

    // unmount komponentu
    return () => {
      alert("Prispevěk se vymaže");
      console.log("prispevek zanikl");
    };
  }, []);

  return (
    <div className="card m-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>{text}</h5>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Vymazat akcii
        </button>
      </div>
      <div className="card-body">
        <Operations />
      </div>
    </div>
  );
}

export default PrispevekAkcie;
