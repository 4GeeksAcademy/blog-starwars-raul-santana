import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home"; 
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import CardPersonajes from "./views/CardPersonajes";
import CardPlanetas from "./views/CardPlanetas";
import Cardstarships from "./views/CardStarships";
import SingleCardPersonaje from "./views/SingleCardPersonaje";
import SingleCardPlaneta from "./views/SingleCardPlaneta"; 
import SingleCardStarship from "./views/SingleCardStarship";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CardPersonajes" element={<CardPersonajes />} />
			<Route path="/SingleCardPersonaje/:id" element={<SingleCardPersonaje />} />
			<Route path="/CardPlanetas" element={<CardPlanetas />} />
            <Route path="/SingleCardPlaneta/:id" element={<SingleCardPlaneta />} />
            <Route path="/CardStarships" element={<Cardstarships />} />
			<Route path="/SingleCardStarship/:id" element={<SingleCardStarship />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
