import React, { useState, useEffect, useContext } from "react";

// Import component
import PrinterTable from "../../components/Tables/PrinterTable";

const Printer = () => {
  return (
    <div className="driverpage-wrapper">
      <PrinterTable />
    </div>
  );
};

export default Printer;
