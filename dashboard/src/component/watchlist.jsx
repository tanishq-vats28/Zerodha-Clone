import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import WatchListActions from "./watchlistactions";
import OrderForm from "./forms/orderForm";

function Watchist({ stock }) {
  const [itemHoverStatus, setItemHoverStatus] = useState(false);
  const handleMouseHover = () => {
    setItemHoverStatus(true);
  };
  const handleMouseLeave = () => {
    setItemHoverStatus(false);
  };
  const [buyForm, setBuyForm] = useState(false);
  const toggleBuyForm = () => {
    setBuyForm((prev) => !prev);
  };
  const [sellForm, setSellForm] = useState(false);
  const toggleSellForm = () => {
    setSellForm((prev) => !prev);
  };

  return (
    <>
      <li onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <div className="watchlist-item">
          <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
          <div className="sub-watchlist-item">
            <span className="item-percent">{`${stock.percent}%`}</span>
            {stock.isDown ? (
              <KeyboardArrowDownIcon className="down" />
            ) : (
              <KeyboardArrowUpIcon className="up" />
            )}
            <span className="item-price">{stock.price}</span>
          </div>
        </div>
        {itemHoverStatus && (
          <WatchListActions
            toggleBuyForm={toggleBuyForm}
            toggleSellForm={toggleSellForm}
          />
        )}
        {buyForm && (
          <OrderForm
            onClose={toggleBuyForm}
            name={stock.name}
            price={stock.price}
            mode="Buy"
          />
        )}
        {sellForm && (
          <OrderForm
            onClose={toggleSellForm}
            name={stock.name}
            price={stock.price}
            mode="Sell"
          />
        )}
      </li>
    </>
  );
}

export default Watchist;
