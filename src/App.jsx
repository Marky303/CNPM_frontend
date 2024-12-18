import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import contexts
import { UserauthProvider } from "./context/UserauthContext";
import { PrintingProvider } from "./context/PrintingContext";

// Import private route/link check
import PrivateRouteCheck from "./hocs/PrivateRouteCheck";

// Import hocs
import Layout from "./hocs/Layout";
import ChatBubbleLayout from "./hocs/ChatBubbleLayout";

// Import main pages
import Home from "./pages/Home";

// Import introduction pages
import Features from "./pages/Intro/Features";
import Pricing from "./pages/Intro/Pricing";

// Import authentication pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Import main pages
import Dashboard from "./pages/Main/Dashboard";

// Import print related pages
import Print from "./pages/Printing/Print";
import Token from "./pages/Printing/Token";
import History from "./pages/Printing/History";
import Printer from "./pages/Printing/Printers";
import AddPrinter from "./pages/Printing/AddPrinter";
import EditPrinter from "./pages/Printing/EditPrinter";
import Setting from "./pages/Printing/Setting";

// Import special pages
import PageNotFound from "./pages/Error/PageNotFound";

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserauthProvider />}>
        <Route exact path="/" element={<PrintingProvider />}>
          <Route exact path="/" element={<PrivateRouteCheck />}>
            <Route exact path="/" element={<Layout />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/features" element={<Features />} />
              <Route exact path="/pricing" element={<Pricing />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />

              <Route exact path="/" element={<ChatBubbleLayout />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/print" element={<Print />} />
                <Route exact path="/token" element={<Token />} />
                <Route exact path="/history" element={<History />} />
                <Route exact path="/printer" element={<Printer />} />
                <Route exact path="/addprinter" element={<AddPrinter />} />
                <Route exact path="/editprinter/:id" element={<EditPrinter />} />
                <Route exact path="/setting" element={<Setting />} />
              </Route>
            </Route>
          </Route>
          <Route exact path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
