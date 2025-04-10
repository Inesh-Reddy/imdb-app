import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contactus from "./pages/Contact-us";
import Listing from "./pages/Listing";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to={`/`}>Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact-us">Contact-us</Link>
        <Link to="/Listing/1">Listings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/listing/:id" element={<Listing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
