import React, { useState, useEffect, useContext } from "react";

// Import component
import HistoryTable from "../../components/Tables/HistoryTable";

const History = () => {
  return (
    <div className="driverpage-wrapper">
      <HistoryTable />
    </div>
  );
};

export default History;
