import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePge from "./Pages/HomePge";
import LandingPage from "./Pages/LandPage/LandingPage";
import EditQuiz from "./Pages/EditQuiz/EditQuiz";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { QuizProvider } from "./Contexts/QuizProvider";
import CreateQuiz from "./Pages/CreateQuiz/CreateQuiz";

function App() {
  return (
    <div className="app">
      <Header />
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePge />} />
            <Route path="landingPage" element={<LandingPage />} />
            <Route path="EditQuiz/:quizId" element={<EditQuiz />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="CreateQuiz" element={<CreateQuiz />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </div>
  );
}

export default App;
