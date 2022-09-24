import "./App.css";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import DetailPage from "./Pages/DetailPage";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
