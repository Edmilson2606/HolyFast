import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Fasting from "./pages/Fasting";
import Devotional from "./pages/Devotional";
import Contact from "./pages/Contact";

// UTILS
import ScrollToTop from "./utils/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/fasting" element={<Fasting />}></Route>
        <Route path="/devotional" element={<Devotional />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
