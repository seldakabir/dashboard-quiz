import React, { createContext, useContext, useEffect, useState } from "react";
const QuizContext = createContext();

function QuizProvider({ children }) {
  const [quizs, setQuizs] = useState([]);
  useEffect(function () {
    async function fetchQuiz() {
      try {
        const res = await fetch("http://localhost:9000/quizs");
        const data = await res.json();
        setQuizs(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuiz();
  }, []);

  return (
    <QuizContext.Provider value={{ quizs, setQuizs }}>
      {children}
    </QuizContext.Provider>
  );
}

function UseQuiz() {
  const quiz = useContext(QuizContext);
  return quiz;
}
export { UseQuiz, QuizProvider };
