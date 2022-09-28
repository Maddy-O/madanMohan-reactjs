import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Favourite from "./Pages/Favourite";
import DetailPage from "./Pages/DetailPage";
import CreatePage from "./Pages/CreatePage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default App;
