// src/pages/Search.js
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.polygon.io/v3/reference/tickers?search=${query}&active=true&apiKey=G0hYyTaQqFGsXxD994OWJOzP4_s5tlVd`
      );
      const data = await response.json();
      setResults(data.results.slice(0, 5)); // omezíme na 5 výsledků
    } catch (error) {
      console.error("Chyba při načítání dat:", error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="container mt-4">
      <h2>Vyhledávání akcií</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Zadej ticker..."
          />
          <button type="submit" className="btn btn-primary">
            Vyhledat
          </button>
        </div>
      </form>

      {isLoading ? (
        <div>Načítám data...</div>
      ) : results.length > 0 ? (
        <ul className="list-group">
          {results.map((item) => (
            <li key={item.ticker} className="list-group-item">
              <div className="card mb-2">
                <div className="card-body">
                  <h5 className="card-title">{item.ticker}</h5>
                  <p className="card-text">{item.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nebyly nalezeny žádné výsledky.</p>
      )}
    </div>
  );
}

export default Search;
