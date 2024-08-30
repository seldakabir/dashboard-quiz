import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message/Message";

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

  function createQuizSubmit(e, navigate) {
    e.preventDefault();
    if (!description) return alert("Please enter description");
    if (!title) return alert("Please enter title");
    if (totalQuestions <= 0) return alert("Please enter totalQuestions");
    if (!topic1 && !topic2 && !topic3 && !topic4)
      return alert("Please enter atleast one topic");

    const newQuiz = {
      id: quizs.length + 1,
      title,
      description,
      totalQuestions,
      status,
      topic: [topic1, topic2, topic3, topic4].filter(Boolean),
      questions: [],
    };
    addQuiz(newQuiz);
    setQuizDescription("");
    setQuizTitle("");
    setQuizStatus(true);
    setQuizTotalQuestions(0);
    setQuizTopic1("");
    setQuizTopic2("");
    setQuizTopic3("");
    setQuizTopic4("");
    if (navigate) {
      navigate(`/EditQuiz/${newQuiz.id}/${newQuiz.totalQuestions}`);
    }
  }
  function addQuiz(quiz) {
    setQuizs((quizs) => [...quizs, quiz]);
  }
  useEffect(() => {
    console.log("Updated quizs:", quizs);
  }, [quizs]);
  function quizDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this quiz?"
    );
    if (confirmed) {
      const updatedQuizzes = quizs.filter((q) => q.id !== id);

      setQuizs(updatedQuizzes);
      alert("Quiz deleted successfully!");
    }
  }
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
        quizDelete,
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
