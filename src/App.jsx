import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router";
import HomePage from "./pages/home"
import VGDecks from "./pages/vgDecklists"
import OPDecks from "./pages/opDecklists"
import Soon from "./pages/page"

export default function App() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vgdecks" element={<VGDecks />}  />
        <Route path="/opdecks" element={<OPDecks />}  />
        <Route path="/soon" element={<Soon />} />
      </Routes>
    </BrowserRouter>
  );
}