import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Import main App and global styles
import App from "./App.jsx";
import "./pagestyles/index.css";

// Import react-helmet tag to insert into header
import { Helmet } from "react-helmet";

// Import toastify assets
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Deleted react strictmode tag
  <>
    <App />
    <ToastContainer />
    <Helmet>
      <script
        src="https://kit.fontawesome.com/047f0f123d.js"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="../node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
      />
    </Helmet>
  </>
);
