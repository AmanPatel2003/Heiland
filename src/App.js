import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import PageFive from "./components/PageFive";
import Pagesix from "./components/Pagesix";
import Pageseven from "./components/Pageseven";
import PageEight from "./components/PageEight";
import { PageNine } from "./components/PageNine";
import Pageeleven from "./components/Pageeleven";
import { WhereToBay } from "./components/WhereToBay";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/1" element={<PageThree />} />
          <Route path="/about" element={<PageTwo />} />
          <Route path="/story" element={<PageFour />} />
          <Route path="/articles" element={<PageFive />} />
          <Route path="/shop" element={<Pagesix />} />
          <Route path="/privacy" element={<Pageseven />} />
          <Route path="/contact" element={<PageEight />} />
          <Route path="/impact" element={<PageNine />} />
          <Route path="/products" element={<Pageeleven />} />
          <Route path="/WhereToBuy" element={<WhereToBay   />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
