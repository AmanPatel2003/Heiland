import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage/FirstPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import PageTwo from "./components/PageTwo/PageTwo";
import PageThree from "./components/PageThree/PageThree";
import PageFour from "./components/PageFour/PageFour";
import PageFive from "./components/PageFive/PageFive";
import Pagesix from "./components/Pagesix/Pagesix";
import Pageseven from "./components/Pageseven/Pageseven";
import PageEight from "./components/PageEight/PageEight";
import Pageeleven from "./components/PageEleven/Pageeleven";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/2" element={<PageTwo />} />
          <Route path="/3" element={<PageThree />} />
          <Route path="/4" element={<PageFour />} />
          <Route path="/5" element={<PageFive />} />
          <Route path="/6" element={<Pagesix />} />
          <Route path="/7" element={<Pageseven />} />
          <Route path="/8" element={<PageEight />} />
          <Route path="/11" element={<Pageeleven />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
