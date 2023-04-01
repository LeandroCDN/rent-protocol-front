import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/home";
import Registro from "./pages/Registro/registro";
import Alquilar from "./pages/Alquilar/alquilar";
import Cobrar from "./pages/Cobrar/cobrar";
import Quejas from "./pages/Quejas/quejas";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div  className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="/Alquilar" element={<Alquilar />} />
            <Route path="/Cobrar" element={<Cobrar />} />
            <Route path="/Quejas" element={<Quejas />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
