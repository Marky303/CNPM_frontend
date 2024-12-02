import { useContext, createContext, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Import functions
import notify from "../functions/toastify/notify";

// Import context
import UserauthContext from "./UserauthContext";

// Create a new context
const PrintingContext = createContext();

export default PrintingContext;

export const PrintingProvider = () => {
  // Setup
  const navigate = useNavigate();

  // Get context dependencies
  let { getUserinfo } = useContext(UserauthContext);

  // VARIABLES
  // Printer list for whatever
  let [printerList, setPrinterList] = useState([]);

  // History for history table
  let [history, setHistory] = useState([]);

  // History for history table
  let [settings, setSettings] = useState([]);

  // Dashboard info for dashboard
  let [dashboard, setDashboard] = useState({});

  // FUNCTIONS
  // Get dashboard info
  const getDashboard = async () => {
    try {
      // Post request and get response
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_GETDASHBOARD_ENDPOINT,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        setDashboard(response.data);

        // TEST
        console.log(response.data);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Change settings
  const changeSettings = async (e) => {
    try {
      // Create request body
      const body = {
        Token: e.target.Token.value,
        Time: e.target.Time.value,
        AllowedFiles: e.target.AllowedFiles.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_CHANGESETTING_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // Notify
        notify("success", response.data.detail);

        checkSettings();
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Check settings
  const checkSettings = async () => {
    try {
      // Post request and get response
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_CHECKSETTING_ENDPOINT,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        setSettings(response.data);

        // TEST
        console.log(response.data);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Check history
  const checkHistory = async (info) => {
    try {
      // Create request body
      const body = {
        From: info.fromdate,
        To: info.todate,
        PrinterID: info.printer,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_CHECKHISTORY_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        setHistory(response.data);

        // TEST
        console.log(response.data);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Print a document
  const printDocument = async (e) => {
    try {
      // Create request body
      const body = {
        Direction: e.target.direction.value,
        FileName: e.target.filename.value,
        Pages: e.target.pages.value,
        Copies: e.target.copies.value,
        Size: e.target.size.value,
        PrinterID: e.target.printer.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_PRINTDOCUMENT_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // Notify
        notify("success", response.data.detail);

        // GET NEW userifno
        getUserinfo();

        // Navigate back
        navigate("/dashboard");
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Buy token
  const buyToken = async (e) => {
    try {
      // Create request body
      const body = {
        token: e.target.token.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_BUYTOKEN_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        getUserinfo();

        // Notify
        notify("success", response.data.detail);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Get active printers function
  const getActivePrinters = async () => {
    try {
      // Post request and get response
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_GETACTIVEPRINTER_ENDPOINT,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // TEST
        console.log(response.data);

        setPrinterList(response.data);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Get all printers function
  const getAllPrinters = async () => {
    try {
      // Post request and get response
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_GETALLPRINTER_ENDPOINT,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // TEST
        // console.log(response.data);

        setPrinterList(response.data);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Add printer
  const createPrinter = async (e) => {
    try {
      // Create request body
      const body = {
        Name: e.target.name.value,
        SerialNumber: e.target.serialID.value,
        Brand: e.target.brand.value,
        Location: e.target.location.value,
        Model: e.target.model.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_CREATEPRINTER_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // Notify
        notify("success", response.data.detail);

        getAllPrinters();

        // Navigate back
        navigate("/printer");
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Delete printer
  const deletePrinter = async (id) => {
    try {
      // Create request body
      const body = {
        id: id,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_DELETEPRINTER_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        getAllPrinters();

        // Notify
        notify("success", response.data.detail);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Toggle printer
  const togglePrinter = async (id) => {
    try {
      // Create request body
      const body = {
        id: id,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_TOGGLEPRINTER_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        getAllPrinters();

        // Notify
        notify("success", response.data.detail);
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // Edit printer
  const editPrinter = async (e) => {
    try {
      // Create request body
      const body = {
        id: e.target.id.value,
        Name: e.target.name.value,
        SerialNumber: e.target.serialID.value,
        Brand: e.target.brand.value,
        Location: e.target.location.value,
        Model: e.target.model.value,
      };

      // Post request and get response
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_EDITPRINTER_ENDPOINT,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Check response
      if (response && response.status == 200) {
        // Notify
        notify("success", response.data.detail);

        getAllPrinters();
      } else {
        throw e;
      }
    } catch (err) {
      let list = err.response.data.error;
      list.forEach((item) => {
        notify("error", item);
      });
    }
  };

  // EXPORT
  const contextData = {
    // Variables
    printerList: printerList,
    history: history,
    settings: settings,
    dashboard: dashboard,

    // Functions
    getAllPrinters: getAllPrinters,
    deletePrinter: deletePrinter,
    createPrinter: createPrinter,
    togglePrinter: togglePrinter,
    editPrinter: editPrinter,
    getActivePrinters: getActivePrinters,
    buyToken: buyToken,
    printDocument: printDocument,
    checkHistory: checkHistory,
    checkSettings: checkSettings,
    changeSettings: changeSettings,
    getDashboard: getDashboard,
  };

  return (
    <PrintingContext.Provider value={contextData}>
      {<Outlet />}
    </PrintingContext.Provider>
  );
};
