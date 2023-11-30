import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then(data => {
        setStocks(data);
        setFilteredStocks(data);
      });
  }, []);

  const addStockToPortfolio = (stockId) => {
    const stock = stocks.find((s) => s.id === stockId);
    setPortfolio([...portfolio, stock]);
  };

  const removeStockFromPortfolio = (stockId) => {
    setPortfolio(portfolio.filter((stock) => stock.id !== stockId));
  };

  const sortStocks = (criteria) => {
    let sortedStocks = [...stocks];
    if (criteria === 'alphabetically') {
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (criteria === 'price') {
      sortedStocks.sort((a, b) => a.price - b.price);
    }
    setFilteredStocks(sortedStocks);
  };

  const filterStocks = (type) => {
    if (type === 'all') {
      setFilteredStocks(stocks);
    } else {
      setFilteredStocks(stocks.filter(stock => stock.type === type));
    }
  };

  return (
    <div>
      <SearchBar onSort={sortStocks} onFilter={filterStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onStockClick={addStockToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onRemoveStock={removeStockFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
