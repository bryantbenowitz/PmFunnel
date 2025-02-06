import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PmFunnel from "./PmFunnel";
import Layout from "./Layout";

export default function App() {
  const backendUrl = "http://localhost:5000/api";
  const frontendUrl = "http://localhost:3000";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout backendUrl={backendUrl} frontendUrl={frontendUrl} />}>
          <Route index element={<PmFunnel backendUrl={backendUrl} frontendUrl={frontendUrl} />} />
          {/* <Route path="/about" element={<NewAbout backendUrl={backendUrl} frontendUrl={frontendUrl} />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
