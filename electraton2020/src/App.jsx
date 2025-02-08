import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Admins from "./pages/Admins";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </Router>
  );
}

export default App;
