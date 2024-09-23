import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Importing contexts
import AuthContext from "../context/UserauthContext";

// Import route checking function
import checkPrivateRoute from "../functions/routeCheck/checkPrivateRoute";

const PrivateRouteCheck = () => {
  // Setup
  const navigate = useNavigate();

  // Get functions + variables from contexts
  let { accessToken } = useContext(AuthContext);

  // Check for Route/route change
  const location = useLocation();
  useEffect(() => {
    const result = checkPrivateRoute(location.pathname);
    if (result == "private") {
      // Check if user is logged in, if not, go back to home page
      if (!accessToken) {
        navigate("/");
      }
    } else if (result == "public") {
      // Check if user is logged in, if yes, go to dashboard
      if (accessToken) {
        navigate("/dashboard");
      }
    } else {
      // Dont do anything
    }
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouteCheck;
