import React from "react";
import Stock from "./Stock"; 

function StockContainer({ stocks, onStockClick }) {
  return (
    <div>
      {stocks.map(stock => (
        <Stock key={stock.id} {...stock} onStockClick={onStockClick} />

      ))}
    </div>
  );
}

export default StockContainer;
