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
// import Pagesix from "./pages/Pagesix";
import Pageseven from "./pages/Pageseven";
import PageEight from "./pages/PageEight";
import { PageNine } from "./pages/PageNine";
// import Pageeleven from "./pages/Pageeleven";
import { WhereToBay } from "./pages/WhereToBay";
import { Advices } from "./pages/Advices";
import { Supplement } from "./pages/productCategory/Supplement";
import { Tea } from "./pages/productCategory/Tea";
import { Beauty } from "./pages/productCategory/Beauty";
import {Ambrosia} from "./pages/products/supplements/Ambrosia"
import {Ashwagandha} from "./pages/products/supplements/Ashwagandha"
import {Satavari} from "./pages/products/supplements/Satavari"
import {Chamomile} from "./pages/products/tea/Chamomile"
import {Ginger} from "./pages/products/tea/Ginger"
import {Hibiscus} from "./pages/products/tea/Hibiscus"
import {Peppermint} from "./pages/products/tea/Peppermint"
import {Rose} from "./pages/products/tea/Rose"
import {Clayglow} from "./pages/products/beauty/Clayglow"
import {Golden} from "./pages/products/beauty/Golden"
import {ScarletGlow} from "./pages/products/beauty/ScarletGlow"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/article1" element={<PageThree />} />
          <Route path="/mission" element={<PageTwo />} />
          <Route path="/about" element={<PageFour />} />
          <Route path="/posts" element={<PageFive />} />
          {/* <Route path="/products" element={<Pagesix />} /> */}
          <Route path="/privacy" element={<Pageseven />} />
          <Route path="/contact" element={<PageEight />} />
          <Route path="/impact" element={<PageNine />} />
          {/* <Route path="/shop" element={<Pageeleven />} /> */}
          <Route path="/whereToBuy" element={<WhereToBay />} />
          <Route path="/advice" element={<Advices />} />
          {/* PRODUCT_CATEGORY ------------------------------------------------------------------- */}
          <Route path="/supplement" element={<Supplement />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/beauty" element={<Beauty />} />
          {/* SUPPLEMENT PRODUCTS ------------------------------------------------------------------------- */}
          <Route path="/ambrosia" element={<Ambrosia />} />
          <Route path="/ashwagandha" element={<Ashwagandha />} />
          <Route path="/satavari" element={<Satavari />} />
          {/* TEA'S PRODUCTS ------------------------------------------------------------------------------- */}
          <Route path="/chamomile" element={<Chamomile />} />
          <Route path="/ginger" element={<Ginger />} />
          <Route path="/hibiscus" element={<Hibiscus />} />
          <Route path="/peppermint" element={<Peppermint />} />
          <Route path="/rose" element={<Rose />} />
          {/* BEAUTY PRODUCTS --------------------------------------------------------------------------------------- */}
          <Route path="/clayglow" element={<Clayglow />} />{" "}
          <Route path="/golden" element={<Golden/>} />{" "}
          <Route path="/scarletglow" element={<ScarletGlow />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
