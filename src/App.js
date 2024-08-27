import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePge from "./Pages/HomePge";
import LandingPage from "./Pages/LandPage/LandingPage";
import EditQuiz from "./Pages/EditQuiz/EditQuiz";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePge />}></Route>
          <Route path="landingPage" element={<LandingPage />}></Route>
          <Route path="EditQuiz" element={<EditQuiz />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
