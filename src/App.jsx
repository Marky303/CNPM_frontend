import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/Setting/Setting.jsx"
import Report from "./components/Report/Report.jsx"

// Import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Report/>}>
        
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
