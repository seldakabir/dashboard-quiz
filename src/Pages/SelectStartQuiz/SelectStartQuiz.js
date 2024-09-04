import React, { useState } from "react";
import styles from "./SelectStartQuiz.module.css";
import Quiz from "../../Components/Quiz/Quiz";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const { quizs } = UseQuiz();
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const navigateStart = useNavigate();
  let selected = {};
  function getSelectedQuiz(id) {
    selected = quizs.find((q) => q.id === Number(id));
    if (selected) {
      setSelectedQuiz(selected);
      navigateStart(`/QuizStart/${selected.id}/${selected.totalQuestions}`);
    } else {
      console.error("Selected quiz not found");
    }
  }
  return (
    <div>
      <main>
        <div className={styles.quizSelect}>Select a Quiz to start</div>

        <div className={styles.qustionBoxContainer}>
          {quizs.map((quiz) => (
            <Quiz
              key={quiz.id}
              quiz={quiz}
              onClickQuiz={() => getSelectedQuiz(quiz.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
