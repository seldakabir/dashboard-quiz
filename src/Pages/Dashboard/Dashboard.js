import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Quiz from "../../Components/Quiz/Quiz";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
export default function Dashboard() {
  const { quizs, quizDelete } = UseQuiz();
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const quiz = {};
  const navigateEdit = useNavigate();
  const navigateStart = useNavigate();
  let selected = {};
  function getSelectedQuiz(id) {
    selected = quizs.find((q) => q.id === Number(id));
    setSelectedQuiz((selectedQuiz) => selected);
  }
  function goToSelectQuiz() {
    navigateStart("/SelectStartQuiz");
  }
  function handleDeleteQuiz(id) {
    quizDelete(id);
    if (selectedQuiz?.id === id) {
      setSelectedQuiz("");
    }
  }

  function navigateToEdit() {
    if (navigateEdit) {
      navigateEdit(
        `/EditCurQuiz/${selectedQuiz.id}/${selectedQuiz.totalQuestions}`
      );
    }
  }
  return (
    <div>
      <header>
        <h1>Dasboard</h1>
        <div className={styles.header}>
          <h3>My Quizes {quiz ? quiz.title : ""}</h3>
          <Link to="/CreateQuiz">
            {" "}
            <Button type="back">+Create Quiz</Button>
          </Link>
        </div>
      </header>
      <main>
        <div className={styles.quizSelect}>
          {selectedQuiz ? (
            <div className={styles.quizSelect}>
              <div className={styles.flex}>
                Select a Quiz:{selectedQuiz ? selectedQuiz.title : ""}
              </div>{" "}
              <div className={styles.delete}>
                {" "}
                <p onClick={goToSelectQuiz}>Start a Quiz</p>
                <p onClick={() => handleDeleteQuiz(selected.id)}>DELETE</p>
                <p
                  className={styles.edit}
                  onClick={() =>
                    navigateToEdit(selected.id, selected.totalQuestions)
                  }
                >
                  Edit Questions
                </p>{" "}
              </div>
            </div>
          ) : (
            <div className={styles.quizSelect}>Select a Quiz</div>
          )}
        </div>

        <div className={styles.qustionBoxContainer}>
          {quizs.map((quiz) => (
            <Quiz quiz={quiz} onClickQuiz={getSelectedQuiz} />
          ))}
        </div>
      </main>
    </div>
  );
}
