import { useState } from "react";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { AdminInfo } from "./pages/informationPages/AdminInfoPage";
import { AdvicesPage } from "./pages/informationPages/AdvicesPage";
import { ArchitecturePage } from "./pages/informationPages/ArchitecturePage";
import { DontsPage } from "./pages/informationPages/DontsPage";
import { EventsPage } from "./pages/informationPages/EventsPage";
import { FoodPage } from "./pages/informationPages/FoodPage";
import { HealthcarePage } from "./pages/informationPages/HealthcarePage";
import { HistoryPage } from "./pages/informationPages/HistoryPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-info" element={<AdminInfo />} />
      <Route path="/advices" element={<AdvicesPage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/donts" element={<DontsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/food" element={<FoodPage />} />
      <Route path="/healthcare" element={<HealthcarePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
