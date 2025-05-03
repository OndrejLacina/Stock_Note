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

  const pridejPrispevek = (zprava) => {
    setPrispevky([...prispevky, zprava]);
  };

  const smazPrispevek = (index) => {
    setPrispevky(prispevky.filter((prispevek, indexP) => indexP !== index));
  };

  return (
    <BrowserRouter>
      <Navigace />
      <div>
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
