import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Import functions
import notify from "../functions/toastify/notify";

// Create a new context
const UserauthContext = createContext();

export default UserauthContext;

export const UserauthProvider = () => {
  // Setup
  const navigate = useNavigate();

  // VARIABLES
  // Acess and refresh token
  let [accessToken, setAccessToken] = useState(() =>
    localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null
  );

  let [refreshToken, setRefreshToken] = useState(() =>
    localStorage.getItem("refreshToken")
      ? localStorage.getItem("refreshToken")
      : null
  );

  // Session expire time
  let [sessionExpireTime, setSessionExpireTime] = useState(() =>
    localStorage.getItem("sessionExpireTime")
      ? localStorage.getItem("sessionExpireTime")
      : null
  );

  // Indicate loading
  let [loading, setLoading] = useState(false);

  // FUNCTIONS
  // Login function
  const login = async (e) => {
    // Change loading to true
    setLoading(true);

    try {
      // Create request body
      const body = {
        email: e.target.email.value,
        password: e.target.password.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_LOGIN_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // Set tokens
        setAccessToken(response.data.access);
        setRefreshToken(response.data.refresh);

        // Save to local storage
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        // Notify
        notify("success", "Welcome back!");

        // Check for remember me
        if (!e.target.remember.checked) {
          // Save session expire time
          setSessionExpireTime(
            Date.now() + Number(import.meta.env.VITE_SESSION_TIME)
          );
          localStorage.setItem(
            "sessionExpireTime",
            Date.now() + Number(import.meta.env.VITE_SESSION_TIME)
          );
        }

        // Redirect
        navigate("/dashboard");
      } else {
        throw e;
      }
    } catch (err) {
      notify("error", err.response.data.detail);
    }

    // Change loading back to false
    setLoading(false);
  };

  // Logout function
  const logout = () => {
    // Delete all token in local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setRefreshToken(null);

    // Delete session expire time
    localStorage.removeItem("sessionExpireTime");
    setSessionExpireTime(null);

    // Navigate back to home page
    navigate("/");

    // Notify user
    notify("warning", "Logged out!");
  };

  // EXPORT
  const contextData = {
    // Variables
    accessToken: accessToken,
    loading: loading,

    // Functions
    login: login,
    logout: logout,
  };

  // Session expire time check
  useEffect(() => {
    // Log out if session is over
    if (sessionExpireTime && Date.now() >= sessionExpireTime) logout();
  }, []);

  return (
    <UserauthContext.Provider value={contextData}>
      {<Outlet />}
    </UserauthContext.Provider>
  );
};
