import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import Faucet from "./pages/Faucet/Faucet.js";
import Sorteo from "./pages/Sorteo/Sorteo.js";
import "./App.css";

function App() {
  return (
    <div  className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Faucet" element={<Faucet />} />
            <Route path="/Sorteo" element={<Sorteo />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
