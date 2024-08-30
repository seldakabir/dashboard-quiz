import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Quiz from "../../Components/Quiz/Quiz";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
export default function Dashboard() {
  const { quizs, quizDelete } = UseQuiz();
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const quiz = {};

  let selected = {};
  function getSelectedQuiz(id) {
    selected = quizs.find((q) => q.id === Number(id));
    setSelectedQuiz((selectedQuiz) => selected);
    console.log(selected);
    console.log(selected.title);
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
              <div>Select a Quiz:{selectedQuiz ? selectedQuiz.title : ""}</div>{" "}
              <div className={styles.delete}>
                {" "}
                <p onClick={() => quizDelete(selected.id)}>DELETE</p>
                <p className={styles.edit}>Edit Questions</p>{" "}
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
