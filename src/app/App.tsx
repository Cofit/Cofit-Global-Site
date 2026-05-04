import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import CofitLanding from "./components/CofitLanding";
import ConsultationPage from "./components/pages/ConsultationPage";
import PartnersPage from "./components/pages/PartnersPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CofitLanding />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </BrowserRouter>
  );
}