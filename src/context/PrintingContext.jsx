import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Import functions
import notify from "../functions/toastify/notify";

// Create a new context
const PrintingContext = createContext();

export default PrintingContext;

export const PrintingProvider = () => {
  

  // EXPORT
  const contextData = {
    // Variables
    

    // Functions
    
  };

  

  return (
    <PrintingContext.Provider value={contextData}>
      {<Outlet />}
    </PrintingContext.Provider>
  );
};
