import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router";
import HomePage from "./pages/home"

export default function App() {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("current"))
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}