import { useState } from "react";
import Home from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import YourPage from "./pages/YourPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic-info" element={<YourPage />} />
    </Routes>
  );
}

export default App;
