import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
      </Routes>
      {/* 👇 FOOTER ALWAYS VISIBLE */}
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
