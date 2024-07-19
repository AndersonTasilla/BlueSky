import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import RecipePage from "./Pages/Recipes";
import AbourPage from "./Pages/About";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Recipe" element={<RecipePage />} />
        <Route path="/About" element={<AbourPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
