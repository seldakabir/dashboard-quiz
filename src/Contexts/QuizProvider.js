import React, { createContext, useContext, useEffect, useState } from "react";
const QuizContext = createContext();

function QuizProvider({ children }) {
  const [quizs, setQuizs] = useState([]);
  const [title, setQuizTitle] = useState("");
  const [description, setQuizDescription] = useState("");
  const [totalQuestions, setQuizTotalQuestions] = useState(0);
  const [status, setQuizStatus] = useState(true);
  const [topic, setQuizTopic] = useState([]);
  const [topic1, setQuizTopic1] = useState("");
  const [topic2, setQuizTopic2] = useState("");
  const [topic3, setQuizTopic3] = useState("");
  const [topic4, setQuizTopic4] = useState("");

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

  function createQuizSubmit(e) {
    e.preventDefault();
    if (!description || !title || !totalQuestions)
      return alert("please complete the information");
    const newQuiz = {
      id: quizs.length + 1,
      title,
      description,
      totalQuestions,
      status,
      topic: [topic1, topic2, topic3],
    };
    addQuiz(newQuiz);
    setQuizDescription("");
    setQuizTitle("");
    setQuizStatus(true);
    setQuizTotalQuestions(0);
    setQuizTopic([]);
  }
  function addQuiz(quiz) {
    setQuizs((quizs) => [...quizs, quiz]);
  }
  useEffect(() => {
    console.log("Updated quizs:", quizs);
  }, [quizs]);

  return (
    <QuizContext.Provider
      value={{
        quizs,
        setQuizs,
        createQuizSubmit,
        setQuizTitle,
        setQuizDescription,
        setQuizTotalQuestions,
        setQuizStatus,
        setQuizTopic,
        title,
        description,
        totalQuestions,
        status,
        topic,
        topic1,
        setQuizTopic1,
        topic2,
        setQuizTopic2,
        topic3,
        setQuizTopic3,
        topic4,
        setQuizTopic4,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function UseQuiz() {
  const quiz = useContext(QuizContext);
  return quiz;
}
export { UseQuiz, QuizProvider };
