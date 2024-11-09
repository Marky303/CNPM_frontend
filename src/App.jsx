import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import contexts
import { UserauthProvider } from "./context/UserauthContext";

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

// Import special pages
import PageNotFound from "./pages/Error/PageNotFound";

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<UserauthProvider />}>
        <Route exact path="/" element={<PrivateRouteCheck />}>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />

            <Route exact path="/" element={<ChatBubbleLayout />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
        <Route exact path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

export default App;
