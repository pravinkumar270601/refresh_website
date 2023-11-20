import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Refresh from "./Pages/Refresh";
import RefreshCategory from "./Pages/RefreshCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import OurStory from "./Pages/OurStory";
import Blog from "./Pages/Blog";
import Contect from "./Pages/Contect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="nav">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Refresh />} />
          <Route path="/hair" element={<RefreshCategory category="hair" />} />
          <Route path="/body" element={<RefreshCategory category="body" />} />
          <Route path="/face" element={<RefreshCategory category="face" />} />
          <Route path="/kits" element={<RefreshCategory category="kits" />} />

          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contect />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
