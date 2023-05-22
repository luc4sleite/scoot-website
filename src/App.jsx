import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Header from "./components/Header";
import Download from "./components/Download/Index";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Locations from "./pages/Locations";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>

      <Download />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
