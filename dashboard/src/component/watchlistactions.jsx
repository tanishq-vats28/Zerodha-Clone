import React, { useEffect, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

function WatchListActions({ toggleBuyForm, toggleSellForm }) {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-buy" onClick={toggleBuyForm}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-sell" onClick={toggleSellForm}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action-chart">
            <BarChartOutlined />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action-more">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}

export default WatchListActions;
