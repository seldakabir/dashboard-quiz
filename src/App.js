import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePge from "./Pages/HomePge";
import LandingPage from "./Pages/LandPage/LandingPage";
import EditQuiz from "./Pages/EditQuiz/EditQuiz";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { QuizProvider } from "./Contexts/QuizProvider";
import CreateQuiz from "./Pages/CreateQuiz/CreateQuiz";
import EditCurQuiz from "./Pages/EditCurQuiz/EditCurQuiz";
import QuizStartPage from "./Pages/QuizStartPage/QuizStartPage";
import SelectStartQuiz from "./Pages/SelectStartQuiz/SelectStartQuiz";
import FinishedPage from "./Pages/FinishedPage/FinishedPage";

function App() {
  return (
    <div className="app">
      <QuizProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePge />} />
            <Route path="landingPage" element={<LandingPage />} />
            <Route
              path="EditQuiz/:quizId/:questionCount"
              element={<EditQuiz />}
            />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="CreateQuiz" element={<CreateQuiz />} />
            <Route
              path="EditCurQuiz/:quizId/:questionCount"
              element={<EditCurQuiz />}
            />
            <Route
              path="/QuizStart/:quizId/:totalQuestions"
              element={<QuizStartPage />}
            />
            <Route path="/SelectStartQuiz" element={<SelectStartQuiz />} />
            <Route path="/FinishedPage" element={<FinishedPage />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </div>
  );
}

export default App;
