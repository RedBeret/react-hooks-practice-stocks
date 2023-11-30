import React from "react";
import Stock from "./Stock";

const PortfolioContainer = ({ portfolio, onRemoveStock }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => (
        <Stock key={stock.id} {...stock} onStockClick={() => onRemoveStock(stock.id)} />
      ))}
    </div>
  );
}

export default PortfolioContainer;