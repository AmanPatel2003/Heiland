import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageTwo from "./pages/PageTwo";
import Error from "./components/Error";
// import PageThree from "./pages/blogs/PageThree";
// -------------------------------------------------------------------------BLOGS----------------------------------------------------------------------------------
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";
import Blog5 from "./pages/blogs/Blog5";
import Blog6 from "./pages/blogs/Blog6";
import Blog7 from "./pages/blogs/Blog7";
// import PageThree from "./pages/blogs/Blog1";

import PageFour from "./pages/PageFour";
// import PageFive from "./pages/PageFive";
// import Pagesix from "./pages/Pagesix";
import Pageseven from "./pages/Pageseven";
import PageEight from "./pages/PageEight";
// import { PageNine } from "./pages/PageNine";
// import Pageeleven from "./pages/Pageeleven";
import { WhereToBay } from "./pages/WhereToBay";
import { Advices } from "./pages/Advices";
import { Supplement } from "./pages/productCategory/Supplement";
import { Tea } from "./pages/productCategory/Tea";
import { Beauty } from "./pages/productCategory/Beauty";
import { Ambrosia } from "./pages/products/supplements/Ambrosia";
import { Ashwagandha } from "./pages/products/supplements/Ashwagandha";
import { Satavari } from "./pages/products/supplements/Satavari";
import { Chamomile } from "./pages/products/tea/Chamomile";
import { Ginger } from "./pages/products/tea/Ginger";
import { Hibiscus } from "./pages/products/tea/Hibiscus";
import { Peppermint } from "./pages/products/tea/Peppermint";
import { Rose } from "./pages/products/tea/Rose";
import { Clayglow } from "./pages/products/beauty/Clayglow";
import { Golden } from "./pages/products/beauty/Golden";
import { ScarletGlow } from "./pages/products/beauty/ScarletGlow";
import { SupplementsAdvice } from "./pages/advicePages/SupplementsAdvice";
import { TeaAdvice } from "./pages/advicePages/TeaAdvice";
import { BeautyAdvice } from "./pages/advicePages/BeautyAdvice";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/mission" element={<PageTwo />} />
          <Route path="/about" element={<PageFour />} />
          <Route path="/privacy" element={<Pageseven />} />
          <Route path="/contact" element={<PageEight />} />
          <Route path="/whereToBuy" element={<WhereToBay />} />
          {/* -----------------------------------------------------------------------------------BLOGS--------------------------------------------------------------------------------- */}
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog5" element={<Blog5 />} />
          <Route path="/blog6" element={<Blog6 />} />
          <Route path="/blog7" element={<Blog7 />} />
          {/* -------------------------------------------------------------------------ACVICE  ------------------------------------------------------------------------- */}
          <Route path="/advice" element={<Advices />} />
          {/* ------------------------------------------------------------------------ ADVICES PAGES----------------------------------------------------------------------- */}
          <Route path="/suppleAdvice" element={<SupplementsAdvice />} />{" "}
          <Route path="/teaAdvice" element={<TeaAdvice />} />{" "}
          <Route path="/beautyAdvice" element={<BeautyAdvice />} />
          {/* -------------------------------------------------------------------------PRODUCT_CATEGORY ------------------------------------------------------------------- */}
          <Route path="/supplement" element={<Supplement />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/beauty" element={<Beauty />} />
          {/*------------------------------------------------------------------------- SUPPLEMENT PRODUCTS ------------------------------------------------------------------------- */}
          <Route path="/ambrosia" element={<Ambrosia />} />
          <Route path="/ashwagandha" element={<Ashwagandha />} />
          <Route path="/satavari" element={<Satavari />} />
          {/* --------------------------------------------------------------------------TEA'S PRODUCTS ------------------------------------------------------------------------------- */}
          <Route path="/chamomile" element={<Chamomile />} />
          <Route path="/ginger" element={<Ginger />} />
          <Route path="/hibiscus" element={<Hibiscus />} />
          <Route path="/peppermint" element={<Peppermint />} />
          <Route path="/rose" element={<Rose />} />
          {/*---------------------------------------------------------------------------- BEAUTY PRODUCTS --------------------------------------------------------------------------------------- */}
          <Route path="/clayglow" element={<Clayglow />} />{" "}
          <Route path="/golden" element={<Golden />} />{" "}
          <Route path="/scarletglow" element={<ScarletGlow />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
