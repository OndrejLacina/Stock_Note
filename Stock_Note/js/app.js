import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigace from "./components/Navigace";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Denik from "./pages/Denik";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [prispevky, setPrispevky] = useState([]);

  const pridejPrispevek = (ticker) => {
    if (!ticker.trim()) {
      alert("Prosím vyplň název akcie!");
      return;
    }
    setPrispevky([...prispevky, { ticker: ticker, operace: [] }]);
  };

  const smazPrispevek = (index) => {
    setPrispevky(prispevky.filter((_, indexP) => indexP !== index));
  };

  const pridejOperaci = (indexPrispevku, novaOperace) => {
    setPrispevky((prevPrispevky) =>
      prevPrispevky.map((prispevek, index) => {
        if (index === indexPrispevku) {
          return {
            ...prispevek,
            operace: [...prispevek.operace, novaOperace],
          };
        }
        return prispevek;
      })
    );
  };

  const smazOperaci = (indexPrispevku, indexOperace) => {
    setPrispevky(
      prispevky.map((prispevek, index) => {
        if (index === indexPrispevku) {
          return {
            ...prispevek,
            operace: prispevek.operace.filter((_, i) => i !== indexOperace),
          };
        }
        return prispevek;
      })
    );
  };

  return (
    <BrowserRouter>
      <Navigace />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={<Portfolio prispevky={prispevky} />}
          />
          <Route
            path="/denik"
            element={
              <Denik
                prispevky={prispevky}
                pridejPrispevek={pridejPrispevek}
                smazPrispevek={smazPrispevek}
                pridejOperaci={pridejOperaci}
                smazOperaci={smazOperaci}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
