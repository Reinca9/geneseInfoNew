import Home from "./pages/home.tsx";
import Materials from "./pages/matériels.tsx";
import Software from "./pages/logiciels.tsx";
import Contact from "./pages/contact.tsx";
import About from "./pages/aboutUs.tsx";
import Services from "./pages/services.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<script src="https://kit.fontawesome.com/bd1f979c00.js" crossorigin="anonymous"></script>
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/matériel" element={<Materials />} />
          <Route path="/logiciels" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/à-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
