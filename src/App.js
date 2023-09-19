import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";
import Pagesix from "./pages/Pagesix";
import Pageseven from "./pages/Pageseven";
import PageEight from "./pages/PageEight";
import { PageNine } from "./pages/PageNine";
import Pageeleven from "./pages/Pageeleven";
import { WhereToBay } from "./components/WhereToBay";
import { Advices } from "./pages/Advices";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/artical1" element={<PageThree />} />
          <Route path="/mission" element={<PageTwo />} />
          <Route path="/about" element={<PageFour />} />
          <Route path="/posts" element={<PageFive />} />
          <Route path="/products" element={<Pagesix />} />
          <Route path="/privacy" element={<Pageseven />} />
          <Route path="/contact" element={<PageEight />} />
          <Route path="/impact" element={<PageNine />} />
          <Route path="/shop" element={<Pageeleven />} />
          <Route path="/whereToBuy" element={<WhereToBay />} />
          <Route path="/advice" element={<Advices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
